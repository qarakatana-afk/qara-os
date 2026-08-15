import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-warm-50">
      <div className="mb-8 text-center">
        <h1 className="font-serif text-3xl text-stone-800 mb-2">
          Bridge Legacy
        </h1>
        <p className="font-sans text-stone-500 text-sm">
          Your life is interesting now.
        </p>
      </div>
      <SignIn />
    </div>
  );
}
