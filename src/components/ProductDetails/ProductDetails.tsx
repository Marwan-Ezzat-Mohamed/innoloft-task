import { useRouter } from "next/navigation";
import RibbonIcon from "@/icons/Ribbon";
import ProductContent from "./ProductContent";
import ProductDeleteButton from "./ProductDeleteButton";
import { CompanyDetails } from "../CompanyDetails";

interface PropsProductDetails {
  hasUserSection: boolean;
  productName: string;
  productDescription: string;
  productPicture: string;
  companyName: string;
  companyAddress: string;
  userName: string;
  userProfilePicture: string;

  editMode?: boolean;
  editComponent?: React.ReactNode;
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
  editMode = false,
  editComponent,
}: PropsProductDetails) {
  const router = useRouter();
  return (
    <div className="flex rounded-md border border-ghost-white bg-white max-lg:flex-col">
      <div className="relative flex flex-col rounded-bl-md rounded-tl-md">
        <div className="absolute top-0 flex h-10 items-center gap-2.5 rounded-br-md rounded-tl-md bg-white">
          <div className="flex h-full w-10 items-center justify-center rounded-br-md rounded-tl-md bg-primary text-white">
            <RibbonIcon />
          </div>

          <div className="mr-2.5 text-base font-semibold text-gunmetal-gray">
            Patent
          </div>
        </div>

        {editMode && (
          <ProductDeleteButton
            onDelete={() => {
              router.push("/");
            }}
          />
        )}

        <img
          src={productPicture}
          alt={productName}
          className="max-h-[300px] w-full rounded-tl-md object-cover max-md:h-[180px] "
        />

        {editMode ? (
          editComponent
        ) : (
          <ProductContent name={productName} description={productDescription} />
        )}
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
