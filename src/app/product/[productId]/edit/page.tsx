"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";
import { z as zod } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Product } from "@/Types/product";

import { Button } from "@/components/common/Button";
import { TextEditor } from "@/components/common/TextEditor";

import RibbonIcon from "@/icons/Ribbon";
import ClockIcon from "@/icons/Clock";
import SettingIcon from "@/icons/Setting";
import CheckIcon from "@/icons/Check";
import TrashIcon from "@/icons/Trash";

import { fetchProduct, updateProduct } from "@/store/slices/product";
import { fetchTrls } from "@/store/slices/trl";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

import { flattenObject } from "@/utils";
import Input from "@/components/common/Input";
import MultiValueField from "@/components/common/MultiValueField";
import { SelectDropDown } from "@/components/common/SelectDropDown";
import { ProductSchema } from "@/schemas";
import { CompanyDetails } from "@/components/CompanyDetails";
import { Dialog } from "@/components/common/Dialog";

export default function ProductEdit() {
  const router = useRouter();
  const params = usePathname();
  const dispatch = useAppDispatch();
  const product = useAppSelector((state) => state.productState.product!);
  const isProductLoading = useAppSelector(
    (state) => state.productState.loading
  );
  const trls = useAppSelector((state) => state.trlState.trls);
  const hasUserSection = useAppSelector(
    (state) => state.themeState.theme.hasUserSection
  );
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const productId = params.split("/")[2];

  type ProductValidationSchema = zod.infer<typeof ProductSchema>;

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm<ProductValidationSchema>({
    defaultValues: {
      name: product?.name ?? "",
      video: product?.video ?? "",
      description: product?.description ?? "",
      businessModels: product?.businessModels ?? [],
    },
    resolver: zodResolver(ProductSchema),
  });

  const handleUpdateProduct = (data: Product) => {
    dispatch(updateProduct(data));
  };

  const resetProductForm = useCallback(() => {
    reset(product);
  }, [reset, product]);

  useEffect(() => {
    dispatch(fetchTrls());
    dispatch(fetchProduct(productId));
  }, []);

  useEffect(() => {
    resetProductForm();
  }, [product]);

  const companyAddress = useMemo(() => {
    const address = product?.company.address;
    if (!address) return "";
    return Object.values(flattenObject(address)).join(", ");
  }, [product]);

  if (isProductLoading) return "Loading...";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(handleUpdateProduct)(e);
      }}
      className="w-full"
    >
      <div className="flex flex-grow flex-col gap-5">
        <div className="flex justify-between">
          <label className="text-base font-semibold text-gunmetal-gray">
            Offer Title
          </label>

          <Button href={`/product/${productId}`}>View Offer</Button>
        </div>

        <div className="flex rounded-md border border-ghost-white bg-white max-lg:flex-col">
          <div
            className={`relative flex w-full flex-col rounded-bl-md rounded-tl-md 
             max-lg:w-full`}
          >
            <div className="absolute start-0 top-0 flex h-10 items-center gap-2.5 rounded-br-md rounded-tl-md bg-white">
              <div className="flex h-full w-10 items-center justify-center rounded-br-md rounded-tl-md bg-primary text-white">
                <RibbonIcon />
              </div>

              <div className="text-base font-semibold text-gunmetal-gray">
                Patent
              </div>
            </div>
            <div className="absolute end-0 top-0 flex h-10 cursor-pointer items-center gap-2.5 rounded-bl-md rounded-tl-md border-ghost-white bg-white">
              <div className="md:border-r-1 flex h-full w-10 items-center justify-center rounded-bl-md border border-r-0 border-t-0  text-red-600   ">
                <TrashIcon
                  onClick={() => {
                    setDeleteDialogOpen(true);
                  }}
                />
                <Dialog
                  isOpen={deleteDialogOpen}
                  onOpenChange={(open) => {
                    setDeleteDialogOpen(open);
                  }}
                  title="Delete product"
                  description="Are you sure you want to delete this product?"
                  cancelText="Cancel"
                  confirmText="Delete"
                  onConfirm={() => {
                    // dispatch(deleteProduct(productId));
                    router.push("/");
                  }}
                />
              </div>
            </div>

            <img
              src={product?.picture}
              alt="Product 1"
              className="max-h-[300px] w-full rounded-tl-md max-md:h-[180px]"
            />

            <div className="flex flex-col gap-2.5 p-5 max-md:px-2.5">
              <Input
                {...register("name", { required: true })}
                error={!!errors.name}
                errorMessage={errors.name?.message}
              />

              <Controller
                control={control}
                name="description"
                rules={{ required: true }}
                render={({
                  field: { onChange, value, ref },
                  fieldState: { error },
                }) => {
                  return (
                    <TextEditor
                      value={value}
                      onValueChange={(data) => onChange(data)}
                      errorMessage={error?.message}
                      ref={register("description").ref}
                    />
                  );
                }}
              />

              <div className="mt-1.5 flex justify-end gap-2.5">
                <Button
                  variant="secondary"
                  type="button"
                  onClick={resetProductForm}
                >
                  Cancel
                </Button>
                <Button type="submit" className="gap-1.5">
                  <CheckIcon />
                  Save
                </Button>
              </div>
            </div>
          </div>

          {hasUserSection && (
            <CompanyDetails
              companyName={product?.company.name}
              companyAddress={companyAddress}
              userName={`${product?.user.firstName} ${product?.user.lastName}}`}
              userProfilePicture={product?.user.profilePicture}
            />
          )}
        </div>

        <div className="flex flex-col gap-5 rounded-md border border-ghost-white bg-white p-5 max-md:px-2.5">
          <p className="text-base font-semibold text-gunmetal-gray">Video</p>

          <div className="w-full">
            <Input
              placeholder="Add a youtube or vimeo link"
              {...register("video")}
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 rounded-md border border-ghost-white bg-white p-5 max-md:px-2.5">
          <p className="text-base font-semibold text-gunmetal-gray">
            Offer details
          </p>
          <div>
            <div className="flex flex-col gap-5">
              <div className="flex flex-grow flex-col items-start gap-2">
                <div className="flex gap-1 text-slate-gray">
                  <div className="h-6 w-6">
                    <ClockIcon />
                  </div>
                  <label>TRL</label>
                </div>

                <div className="flex w-[100%] flex-col gap-2.5 max-md:w-[90%]">
                  <SelectDropDown
                    items={trls?.map((trl) => ({
                      value: trl.id,
                      label: trl.name,
                    }))}
                    value={watch("trl")?.id.toString()}
                    onChange={(trlValue) => {
                      const trl = trls?.find((trl) => trl.id === trlValue);
                      setValue("trl", {
                        id: Number(trl?.id),
                        name: trl?.name ?? "",
                      });
                    }}
                    ref={register("trl").ref}
                    error={!!errors.trl?.name}
                    errorMessage={errors.trl?.name?.message}
                  />
                </div>
              </div>

              <MultiValueField
                icon={<SettingIcon />}
                label="Categories"
                name="categories"
                register={register}
                control={control}
              />
              <MultiValueField
                icon={<SettingIcon />}
                label="Business Models"
                name="businessModels"
                register={register}
                control={control}
              />

              <div className="text-cadet-grey mb-5 flex flex-grow flex-col items-start gap-2">
                <div className="flex gap-1 text-slate-gray">
                  <div className="h-6 w-6">
                    <ClockIcon />
                  </div>
                  <label>Costs</label>
                </div>

                <div className="flex w-[100%] flex-col gap-2.5 max-md:w-[90%]">
                  <Input
                    {...register("investmentEffort", {
                      required: true,
                    })}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-x-10 gap-y-10">
            <div className="mt-1.5 flex justify-end gap-2.5">
              <Button
                variant="secondary"
                type="button"
                onClick={resetProductForm}
              >
                Cancel
              </Button>
              <Button type="submit" className="gap-1.5">
                Save changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
