import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import ConversationView from "@/components/ConversationView";

export default async function ConversationPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <div className="min-h-screen bg-warm-50 flex flex-col">
      {/* Header */}
      <header className="border-b border-warm-100 bg-warm-50/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/legacy"
            className="font-serif text-stone-500 hover:text-stone-700 transition-colors text-sm"
          >
            ← Your Legacy
          </Link>
          <UserButton afterSignOutUrl="/sign-in" />
        </div>
      </header>

      {/* Conversation area — fills remaining space */}
      <div className="flex-1 flex flex-col">
        <ConversationView />
      </div>
    </div>
  );
}
