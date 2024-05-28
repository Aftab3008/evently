import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h2 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl">
        404! There no such page found!
      </h2>
      <Link href="/" className="text-primary-500 hover:underline">
        Go back to homepage
      </Link>
    </div>
  );
}
