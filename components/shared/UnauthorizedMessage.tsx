"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

type UnauthorizedProps = {
  redirectPath: string;
  message?: string;
};

const UnauthorizedMessage = ({ redirectPath, message }: UnauthorizedProps) => {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push(redirectPath);
    }, 2500);
    return () => clearTimeout(timer);
  }, [redirectPath]);

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <p className="text-xl text-red-500 mb-4">
        {message ? message : "You have no authority to update this event"}
      </p>
      <p className="text-lg text-gray-500">
        {message
          ? "Redirecting to the home page..."
          : "Redirecting to the events page..."}
      </p>
    </div>
  );
};

export default UnauthorizedMessage;
