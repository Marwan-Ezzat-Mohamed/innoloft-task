import RibbonIcon from "@/icons/Ribbon";
import LocationIcon from "@/icons/Location";
import { InnoloftLogo } from "@/config";
import Image from "next/image";

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
    <div className="flex rounded-md border border-snow-white bg-white max-lg:flex-col">
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
        <div className="flex min-w-[33%] flex-grow flex-col gap-2.5 border-l border-snow-white p-5 max-md:px-2.5">
          <p className="font-semibold text-gunmetal-gray">Offered By</p>
          <img
            src={InnoloftLogo}
            alt="Innoloft"
            width="200px"
            className="mt-5"
          />

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
      )}
    </div>
  );
}
