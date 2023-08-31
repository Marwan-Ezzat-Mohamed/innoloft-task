"use client"
import React from "react";
import TrashIcon from "@/icons/Trash";
import { Dialog } from "@/components/common/Dialog";

interface ProductDeleteButtonProps {
  onDelete: () => void;
}

export default function ProductDeleteButton({
  onDelete,
}: ProductDeleteButtonProps) {
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);

  return (
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
          onConfirm={onDelete}
        />
      </div>
    </div>
  );
}
