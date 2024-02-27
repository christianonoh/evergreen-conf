import { FC, ReactNode } from "react";
interface InputFieldContainerProps {
  label: string;
  id: string;
  children: ReactNode;
  error?: string;
  required?: boolean;
}

const InputFieldContainer = ({
  label,
  id,
  error,
  children,
  required,
}: InputFieldContainerProps) => {
  return (
    <div className="mb-3">
      <label
        htmlFor={id}
        className="mb-1 block text-base font-semibold text-light"
      >
        {label}
        {/* {required && <span className="text-warning">&nbsp;*</span>} */}
      </label>
      {children}
      {error && (
        <span className="text-warning text-sm font-semibold">{error}</span>
      )}
    </div>
  );
};
export default InputFieldContainer;
