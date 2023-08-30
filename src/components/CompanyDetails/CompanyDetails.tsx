import { InnoloftLogo } from "@/config";
import LocationIcon from "@/icons/Location";
import Image from "next/image";

interface CompanyDetailsProps {
  companyName: string;
  companyAddress: string;
  userName: string;
  userProfilePicture: string;
}

export default function CompanyDetails({
  companyName,
  companyAddress,
  userName,
  userProfilePicture,
}: CompanyDetailsProps) {
  return (
    <div className="flex min-w-[33%] flex-grow flex-col gap-2.5 border-l border-ghost-white p-5 max-md:px-2.5">
      <p className="font-semibold text-gunmetal-gray">Offered By</p>

      <img src={InnoloftLogo} alt="Innoloft" width="200px" className="mt-5" />

      <div className="mb-2.5 flex items-center gap-2.5">
        <Image
          width={64}
          height={64}
          className="rounded-full"
          src={userProfilePicture}
          alt={userName}
        />

        <div className="flex flex-col gap-1 text-sm text-slate-gray">
          <p className="font-semibold">{`${userName}`}</p>
          <p className="">{companyName}</p>
        </div>
      </div>

      <div className="mt-2.5 flex gap-1 text-slate-gray">
        <LocationIcon />
        <p className="text-sm">{companyAddress}</p>
      </div>

      <iframe
        src={`https://maps.google.com/maps?&hl=en&q=${companyAddress}&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
        width={"100%"}
        height={"200px"}
      />
    </div>
  );
}
