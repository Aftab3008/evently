import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: "bg-primary-500 text-white hover:bg-grey-600",
        },
      }}
    />
  );
}
