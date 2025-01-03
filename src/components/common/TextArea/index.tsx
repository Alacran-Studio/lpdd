import { forwardRef, TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, className, ...props }, ref) => {
    const id = `${label}-textarea`;
    let textArea = (
      <textarea
        {...props}
        id={id}
        ref={ref}
        className="text-neutralDark bg-neutralLight h-40 rounded-md border-2 border-gray-300 pl-2 pt-1"
      />
    );

    if (!label) return textArea;

    return (
      <div className={`flex flex-col ${className}`}>
        <label htmlFor={id} className="mb-2 font-bold">
          {label}
        </label>
        {textArea}
      </div>
    );
  }
);

TextArea.displayName = "LpddTextArea";
