"use client";

import { useMemo } from "react";
import { BusinessModel, Category } from "@/Types/product";
import { OfferItem } from "@/components/OfferItem";
import ClockIcon from "@/icons/Clock";
import CostPotIcon from "@/icons/CostPot";
import SettingIcon from "@/icons/Setting";
import StrategyIcon from "@/icons/Strategy";

interface OfferDetailsProps {
  businessModels: BusinessModel[];
  categories: Category[];
  trl: {
    id: number;
    name: string;
  };
  cost: string;
}

export default function OfferDetails({
  businessModels,
  categories,
  trl,
  cost,
}: OfferDetailsProps) {
  const offerItems = useMemo(
    () => [
      {
        icon: <SettingIcon />,
        label: "Categories",
        values: categories.map(({ name }) => name),
      },
      {
        icon: <StrategyIcon />,
        label: "Business Model",
        values: businessModels.map(({ name }) => name),
      },
      { icon: <ClockIcon />, label: "TRL", values: [trl.name] },
      { icon: <CostPotIcon />, label: "Costs", values: [cost] },
    ],
    [businessModels, cost, categories, trl]
  );
  return (
    <div className="flex flex-col gap-5 rounded-md border border-ghost-white px-2.5 py-8 md:px-5">
      <p className="font-semibold text-gunmetal-gray">Offer details</p>

      <div className="grid grid-cols-1 gap-x-10 gap-y-5 md:grid-cols-2">
        {offerItems.map((item) => (
          <OfferItem
            key={item.label}
            icon={item.icon}
            label={item.label}
            values={item.values}
          />
        ))}
      </div>
    </div>
  );
}
