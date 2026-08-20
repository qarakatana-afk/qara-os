import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { prisma } from "@/lib/db";
import ProjectSelector from "@/components/ProjectSelector";

export default async function ProjectPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  const legacy = await prisma.legacy.upsert({
    where: { ownerId: userId },
    create: { ownerId: userId },
    update: {},
  });

  return (
    <div className="min-h-screen bg-warm-50 flex flex-col">
      <header className="border-b border-warm-100 bg-warm-50/80 backdrop-blur-sm">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <Link
            href="/legacy"
            className="font-serif text-stone-500 hover:text-stone-700 transition-colors text-sm"
          >
            ← Your Legacy
          </Link>
        </div>
      </header>
      <main className="flex-1 flex flex-col justify-center">
        <ProjectSelector
          currentProjectType={legacy.projectType}
          currentProjectDetail={legacy.projectDetail}
        />
      </main>
    </div>
  );
}
