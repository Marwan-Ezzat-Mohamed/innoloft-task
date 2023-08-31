import Input from "@/components/common/Input";
import { InnoloftLogo } from "@/config";
import ArrowIcon from "@/icons/Arrow";
import BellIcon from "@/icons/Bell";
import MessengerIcon from "@/icons/Messenger";
import SearchIcon from "@/icons/Search";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-start bg-primary p-2 md:justify-around h-14">
      <div className="flex h-full">
        <div
          className="flex h-full"
          style={{
            width: "140px",
            maxHeight: "40px",
            filter:
              "invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg) brightness(102%) contrast(102%)",
          }}
          onClick={() => {
            router.push("/");
          }}
        >
          <Image
            src={InnoloftLogo}
            alt="Innoloft"
            fill={true}
            style={{
              objectFit: "contain",
            }}
          />
        </div>
      </div>

      <div className="mx-0 hidden w-2/3 items-center md:flex md:justify-between">
        <div className="relative me-2 max-w-lg flex-grow">
          <Input
            type="text"
            name="searchbox"
            id="searchbox"
            placeholder="Enter interests, keyword, company name, etc."
            className="w-full rounded p-2 pr-10 text-black h-[27px] placeholder:text-gunmetal-gray"
          />

          <div className="absolute right-3.5 top-1/2 mr-2 h-4 w-4  -translate-y-1/2 transform">
            <SearchIcon />
          </div>
        </div>
        <div className="flex items-center gap-4 fill-white">
          <MessengerIcon />
          <h3 className="text-lg text-white">EN</h3>
          <ArrowIcon />
          <BellIcon />
          <Image
            width={40}
            height={40}
            src={"/profile_image.svg"}
            alt="profile image"
            className="rounded-full"
          />
          <ArrowIcon />
        </div>
      </div>
    </nav>
  );
}
