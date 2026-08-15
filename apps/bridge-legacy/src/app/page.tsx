import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

// Root page: redirect to /legacy if signed in, /sign-in otherwise.
export default async function Home() {
  const { userId } = await auth();

  if (userId) {
    redirect("/legacy");
  } else {
    redirect("/sign-in");
  }
}
