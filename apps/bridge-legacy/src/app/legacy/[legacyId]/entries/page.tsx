import { auth } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { prisma } from "@/lib/db";

export default async function EntriesPage({
  params,
}: {
  params: Promise<{ legacyId: string }>;
}) {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const { legacyId } = await params;

  const legacy = await prisma.legacy.findFirst({
    where: { id: legacyId, ownerId: userId },
  });
  if (!legacy) notFound();

  // Fetch every conversation session and every entry, then group entries
  // by session so they read as a series of conversations rather than one
  // long undifferentiated list.
  const [conversations, entries] = await Promise.all([
    prisma.conversation.findMany({
      where: { legacyId: legacy.id, ownerId: userId },
      orderBy: { createdAt: "desc" },
    }),
    prisma.entry.findMany({
      where: { legacyId: legacy.id, ownerId: userId },
      orderBy: { createdAt: "asc" },
    }),
  ]);

  const visibleEntries = entries.filter(
    (e: (typeof entries)[number]) => !e.content.startsWith("[owner skipped")
  );

  const entriesBySession = new Map<string, typeof visibleEntries>();
  for (const entry of visibleEntries) {
    const key = entry.sessionId ?? "no-session";
    if (!entriesBySession.has(key)) entriesBySession.set(key, []);
    entriesBySession.get(key)!.push(entry);
  }

  // Only show sessions that actually have visible content.
  const sessionsWithContent = conversations.filter(
    (c: (typeof conversations)[number]) => entriesBySession.get(c.id)?.length
  );

  const formatDate = (d: Date) =>
    new Date(d).toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

  return (
    <div className="min-h-screen bg-warm-50 flex flex-col">
      <header className="border-b border-warm-100 bg-warm-50/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href={`/legacy/${legacyId}`}
            className="font-serif text-stone-500 hover:text-stone-700 transition-colors text-sm"
          >
            ← Your Legacy
          </Link>
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </header>

      <main className="flex-1 page-container">
        <h1 className="section-title mb-2">Your entries</h1>
        <p className="body-text mb-8">
          {visibleEntries.filter((e: (typeof visibleEntries)[number]) => e.role === "owner").length === 0
            ? "Nothing saved yet — head back and begin a conversation."
            : `Everything you've shared so far, organized by conversation.`}
        </p>

        {sessionsWithContent.length === 0 && (
          <div className="card text-center">
            <p className="body-text">
              Once you share something, it'll show up here.
            </p>
            <Link href={`/legacy/${legacyId}/conversation`} className="btn-primary mt-4 inline-block">
              Begin your Legacy
            </Link>
          </div>
        )}

        <div className="space-y-10">
          {sessionsWithContent.map((session: (typeof sessionsWithContent)[number]) => {
            const sessionEntries = entriesBySession.get(session.id) ?? [];
            return (
              <section key={session.id}>
                <p className="label-text mb-3">
                  {formatDate(session.createdAt)}
                </p>
                <div className="space-y-4">
                  {sessionEntries.map((entry: (typeof sessionEntries)[number]) =>
                    entry.role === "ai" ? (
                      <p
                        key={entry.id}
                        className="font-serif text-stone-500 text-base leading-relaxed"
                      >
                        {entry.content}
                      </p>
                    ) : (
                      <div key={entry.id} className="card">
                        <p className="font-sans text-stone-700 leading-relaxed whitespace-pre-wrap">
                          {entry.content}
                        </p>
                        {entry.audioUrl && (
                          <audio
                            controls
                            src={entry.audioUrl}
                            className="mt-3 w-full h-8"
                          />
                        )}
                      </div>
                    )
                  )}
                </div>
              </section>
            );
          })}
        </div>
      </main>
    </div>
  );
}
