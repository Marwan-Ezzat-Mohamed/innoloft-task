"use client";

import { useMemo, forwardRef } from "react";
import dynamic from "next/dynamic";

import "react-quill/dist/quill.snow.css";
import "./styles.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

type ReactQuillProps = typeof ReactQuill extends React.ComponentType<infer P>
  ? P
  : never;

interface TextEditorProps extends ReactQuillProps {
  onValueChange: (data: string) => void;
  errorMessage?: string;
  value: string;
  ref?: React.Ref<typeof ReactQuill>;
}
const TextEditor = forwardRef<ReactQuillProps, TextEditorProps>(
  ({ onValueChange, errorMessage, value, ...props }, ref) => {
    return (
      <div>
        <ReactQuill
          theme="snow"
          onChange={(val) => {
            onValueChange(val);
          }}
          value={value}
          ref={ref}
          {...props}
        />
        {errorMessage && (
          <p className="mt-2.5 text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
    );
  }
);

TextEditor.displayName = "TextEditor";

export default TextEditor;
