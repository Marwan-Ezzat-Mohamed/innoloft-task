import BreadcrumbRightIcon from "@/icons/BreadcrumbRight";
import HomeIcon from "@/icons/Home";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface BreadcrumbProps {
  items: {
    label: string;
    href?: string;
  }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="text-gunmetal-gray flex items-center gap-2.5">
      <Link href={"/"} className="text-slate-gray text-sm">
        <HomeIcon />
      </Link>

      {items.map((item, index) => (
        <div
          key={item.label}
          className="text-cadet-gray flex items-center gap-1"
        >
          <BreadcrumbRightIcon />

          {item.href ? (
            <a
              href={item.href}
              className="text-slate-gray cursor-pointer text-sm "
            >
              {item.label}
            </a>
          ) : (
            <label
              className={cn("text-slate-gray cursor-pointer text-sm", {
                "font-semibold": index === items.length - 1,
              })}
            >
              {item.label}
            </label>
          )}
        </div>
      ))}
    </div>
  );
}
