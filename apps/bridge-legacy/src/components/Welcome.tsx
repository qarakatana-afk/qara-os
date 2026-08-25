import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Welcome from "@/components/Welcome";

// Root page: redirect to /legacy if signed in, otherwise show the
// welcome screen so a first-time visitor gets the pitch before sign-up.
export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/legacy");
  }

  return <Welcome />;
}
