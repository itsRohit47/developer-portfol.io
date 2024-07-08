"use client";

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Profile", href: "/dashboard" },
  { name: "Projects", href: "/dashboard/projects" },
  { name: "Work Experience", href: "/dashboard/experience" },
  { name: "Education", href: "/dashboard/education" },
  { name: "Analytics", href: "/dashboard/analytics" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="mt-5 flex flex-col gap-2">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex items-center justify-start gap-2 rounded-lg px-3 py-2 hover:bg-white text-sm",
              {
                "bg-white border ": pathname === link.href,
              }
            )}
          >
            <p className="">{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}
