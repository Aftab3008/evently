"use client";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemsProps {
  onClose?: () => void;
}
export default function NavItems({ onClose }: NavItemsProps) {
  const pathname = usePathname();
  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          <li
            key={link.label}
            className={`${
              isActive && "text-primary-500"
            } flex-center p-medium-16 whitespace-nowrap`}
          >
            <Link href={link.route} onClick={onClose}>
              {link.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
