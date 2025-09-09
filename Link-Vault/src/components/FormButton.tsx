import React, { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";

type Variant = "save" | "cancel";

type FormButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
};

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

const FormButton = forwardRef<HTMLButtonElement, FormButtonProps>(
  ({ variant, className, type = "button", children, ...rest }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cx("btn", variant, className)}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

FormButton.displayName = "FormButton";

export default FormButton;
