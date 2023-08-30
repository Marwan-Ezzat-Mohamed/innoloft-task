"use client";
import { useEffect, useMemo } from "react";
import DOMPurify from "dompurify";
import { fetchProduct } from "@/store/slices/product";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { Breadcrumb } from "@/components/common/Breadcrumb";
import { Button } from "@/components/common/Button";
import { ProductDetails } from "@/components/ProductDetails";
import { OfferDetails } from "@/components/OfferDetails";
import { VideoSection } from "@/components/VideoSection";
import { flattenObject } from "@/utils";

export default function ProductView() {
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productState.product);
  const { theme } = useAppSelector((state) => state.themeState);

  const sanitizedProductDescription = useMemo(() => {
    if (!product?.description) return "";
    return DOMPurify.sanitize(product.description);
  }, [product?.description]);

  const companyAddress = useMemo(() => {
    const address = product?.company.address;
    if (!address) return "";
    return Object.values(flattenObject(address)).join(", ");
  }, [product]);

  useEffect(() => {
    dispatch(fetchProduct());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!product) return null;

  return (
    <div className="flex grow flex-col gap-5 ">
      <div className="flex flex-wrap justify-between gap-5">
        <Breadcrumb
          items={[{ label: "Offers", href: "" }, { label: product.name }]}
        />
        <Button href="/product/edit">Edit</Button>
      </div>

      <ProductDetails
        hasUserSection={theme.hasUserSection}
        productName={product.name}
        productDescription={sanitizedProductDescription}
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
