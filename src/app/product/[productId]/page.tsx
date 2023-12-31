"use client";
import { useEffect, useMemo } from "react";
import { usePathname } from "next/navigation";

import { fetchProduct } from "@/store/slices/product";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Button } from "@/components/common/Button";
import { ProductDetails } from "@/components/ProductDetails";
import { OfferDetails } from "@/components/OfferDetails";
import { VideoSection } from "@/components/VideoSection";
import { flattenObject } from "@/utils";

export default function ProductView() {
  const params = usePathname();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productState.product);
  const { theme } = useAppSelector((state) => state.themeState);

  const productId = params.split("/")[2];

  const companyAddress = useMemo(() => {
    const address = product?.company.address;
    if (!address) return "";
    return Object.values(flattenObject(address)).join(", ");
  }, [product?.company.address]);

  useEffect(() => {
    dispatch(fetchProduct(productId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product) return null;

  return (
    <div className="flex grow flex-col gap-5 ">
      <div className="flex flex-wrap justify-between gap-5">
        <Breadcrumb
          items={[{ label: "Offers", href: "" }, { label: product.name }]}
        />
        <Button href={`/product/${productId}/edit`}>Edit</Button>
      </div>

      <ProductDetails
        hasUserSection={theme.hasUserSection}
        productName={product.name}
        productDescription={product.description}
        productPicture={product.picture}
        companyName={product.company.name}
        companyAddress={companyAddress}
        userName={`${product.user.firstName} ${product.user.lastName}`}
        userProfilePicture={product.user.profilePicture}
      />
      <VideoSection link={product.video} />
      <OfferDetails
        businessModels={product.businessModels}
        cost={product.investmentEffort}
        categories={product.categories}
        trl={product.trl}
      />
    </div>
  );
}
