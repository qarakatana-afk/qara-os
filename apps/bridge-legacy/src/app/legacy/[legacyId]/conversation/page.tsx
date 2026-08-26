import { auth } from "@clerk/nextjs/server";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { prisma } from "@/lib/db";
import ConversationView from "@/components/ConversationView";

export default async function ConversationPage({
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

  // Shouldn't happen in normal flow (project selection happens first),
  // but guard against it rather than starting an untailored session.
  if (!legacy.projectType) redirect(`/legacy/${legacyId}/project`);

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

      <div className="flex-1 flex flex-col">
        <ConversationView legacyId={legacy.id} projectType={legacy.projectType} />
      </div>
    </div>
  );
}
