import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <SignUp
      appearance={{
        elements: {
          formButtonPrimary: "bg-primary-500 text-white hover:bg-grey-600",
        },
      }}
    />
  );
}
