import RibbonIcon from "@/icons/Ribbon";
import LocationIcon from "@/icons/Location";
import { InnoloftLogo } from "@/config";
import Image from "next/image";
import CompanyDetails from "../CompanyDetails/CompanyDetails";

interface PropsProductDetails {
  hasUserSection: boolean;
  productName: string;
  productDescription: string;
  productPicture: string;
  companyName: string;
  companyAddress: string;
  userName: string;
  userProfilePicture: string;
}
export default function ProductDetails({
  hasUserSection,
  productName,
  productDescription,
  productPicture,
  companyName,
  companyAddress,
  userName,
  userProfilePicture,
}: PropsProductDetails) {
  return (
    <div className="flex rounded-md border border-ghost-white bg-white max-lg:flex-col">
      <div className="relative flex flex-col rounded-bl-md rounded-tl-md">
        <div className="absolute top-0 flex h-10 items-center gap-2.5 rounded-br-md rounded-tl-md bg-white">
          <div className="flex h-full w-10 items-center justify-center rounded-br-md rounded-tl-md bg-primary text-white">
            <RibbonIcon />
          </div>

          <div className="mr-2.5 font-semibold  text-gunmetal-gray">Patent</div>
        </div>

        <img
          src={productPicture}
          alt={productName}
          className="max-h-[300px] w-full rounded-tl-md object-cover max-md:h-[180px] "
        />

        <div className="p-5 max-md:px-2.5">
          <p className="font-semibold text-gunmetal-gray">{productName}</p>
          <div
            className="mt-2.5 text-sm text-slate-gray"
            dangerouslySetInnerHTML={{ __html: productDescription }}
          />
        </div>
      </div>

      {hasUserSection && (
        <CompanyDetails
          companyName={companyName}
          companyAddress={companyAddress}
          userName={userName}
          userProfilePicture={userProfilePicture}
        />
      )}
    </div>
  );
}
