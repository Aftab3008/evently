"use client";

import Link from "next/link";

export default function Error({
  error,
}: {
  error?: Error & { digest?: string };
}) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        {error?.message ? error?.message : "There is no Such a event"}
      </h2>
      <Link href="/" className="mt-4 text-primary-500">
        Go to Home Page
      </Link>
    </div>
  );
}
