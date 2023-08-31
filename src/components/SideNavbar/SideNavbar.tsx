"use client";
import HomeIcon from "@/icons/Home";

import GroupIcon from "@/icons/Group";
import OrganizationIcon from "@/icons/Organization";
import ArrowIcon from "@/icons/Arrow";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface MenuItemProps {
  startIcon: React.ReactNode;
  label: string;
  endIcon?: React.ReactNode;
  href?: string;
}

export function MenuItem({ startIcon, label, endIcon, href }: MenuItemProps) {
  const router = useRouter();
  return (
    <div className="hover:bg-light-gray flex cursor-pointer items-center justify-between gap-3 rounded-xl p-2.5 transition-all duration-200 hover:opacity-80">
      <div
        className="text-gunmetal-gray flex items-center gap-3 "
        onClick={() => {
          href && router.push(href);
        }}
      >
        {startIcon}

        <p>{label}</p>
      </div>

      {endIcon}
    </div>
  );
}

const menuItems = [
  { icon: <HomeIcon />, label: "Home", href: "/" },
  { icon: <GroupIcon />, label: "Members" },
  {
    icon: <OrganizationIcon />,
    label: "Organizations",
    endIcon: <ArrowIcon />,
  },
];

export default function SideNavbar() {
  return (
    <div className="hidden min-w-[280px] flex-col gap-2.5 xl:flex">
      <div className="flex items-center gap-4 ">
        <Image
          width={64}
          height={64}
          src={"/profile_image.svg"}
          alt="profile image"
          className="mx-w-full rounded-full"
        />

        <div className="text-gunmetal-gray">
          <p className="text-lg font-semibold">Sven Pietsch</p>
          <p className="text-sm">Innoloft GmbH</p>
        </div>
      </div>
      <div className="gap-2.5 ">
        {menuItems.map((item, index) => (
          <MenuItem
            key={item.label}
            startIcon={item.icon}
            label={item.label}
            endIcon={item.endIcon}
            href={item.href}
          />
        ))}
      </div>
    </div>
  );
}
