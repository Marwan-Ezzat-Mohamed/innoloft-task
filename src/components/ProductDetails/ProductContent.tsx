import React from "react";

interface ProductContentProps {
  name: string;
  description: string;
}

export default function ProductContent({
  name,
  description,
}: ProductContentProps) {
  return (
    <div className="p-5 max-md:px-2.5">
      <p className="font-semibold text-gunmetal-gray">{name}</p>
      <div
        className="mt-2.5 text-sm text-slate-gray"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  );
}
