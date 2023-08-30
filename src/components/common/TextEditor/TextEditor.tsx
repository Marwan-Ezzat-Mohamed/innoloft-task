"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";
import "./styles.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

interface TextEditorProps extends React.ComponentProps<typeof ReactQuill> {
  onValueChange: (data: string) => void;
  errorMessage?: string;
  value: string;
  forwardRef: React.ForwardedRef<any>;
}
export default function TextEditor({
  onValueChange,
  errorMessage,
  value,
  forwardRef,
  ...props
}: TextEditorProps) {
  return (
    <div>
      <ReactQuill
        theme="snow"
        onChange={(val) => {
          onValueChange(val);
        }}
        ref={forwardRef}
        value={value}
        {...props}
      />
      {errorMessage && (
        <p className="mt-2.5 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
}
