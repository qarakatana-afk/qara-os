import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";

// Bridge Legacy is a fully authenticated app — no static prerendering needed.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Bridge Legacy",
  description:
    "A living celebration of your stories, passions, memories, and life as it is being lived.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="bg-warm-50 text-stone-800 antialiased">{children}</body>
      </html>
    </ClerkProvider>
  );
}
