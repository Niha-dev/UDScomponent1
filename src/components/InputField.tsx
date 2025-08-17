import React, { useState } from "react";
import { X, Eye, EyeOff, Loader2 } from "lucide-react";

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  loading?: boolean;
  variant?: "filled" | "outlined" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "text" | "password";
  clearable?: boolean;
  theme?: "light" | "dark";
  passwordToggle?: boolean;
}
const sizeClasses = {
  sm: "px-2 py-1 text-sm rounded-md",
  md: "px-3 py-2 text-base rounded-lg",
  lg: "px-4 py-3 text-lg rounded-xl",
};
const variantClasses = {
  filled:
    "bg-gray-100 dark:bg-gray-800 border border-transparent focus:border-blue-500",
  outlined:
    "border border-gray-300 dark:border-gray-600 focus:border-blue-500",
  ghost:
    "bg-transparent border-b border-gray-300 dark:border-gray-600 focus:border-blue-500 rounded-none",
};
export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  loading = false,
  variant = "outlined",
  size = "md",
  type = "text",
  clearable = false,
  theme = "light",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && showPassword ? "text" : type;

  return (
    <div
      className={`flex flex-col w-full ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}
    >
      {label && (
        <label className="mb-1 text-sm font-medium" htmlFor={label}>
          {label}
        </label>
      )}
      <div className="relative flex items-center w-full">
        <input
          id={label}
          value={value}
          onChange={onChange}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled || loading}
          className={`
            w-full 
            ${sizeClasses[size]} 
            ${variantClasses[variant]} 
            focus:outline-none
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            ${invalid ? "border-red-500 focus:border-red-600" : ""}
          `}
        />
        {loading && (
          <span className="absolute right-2 animate-spin text-gray-500 dark:text-gray-300">
            <Loader2 size={16} />
          </span>
        )}
        {clearable && value && !loading && (
          <button
            type="button"
            onClick={() =>
              onChange?.({
                target: { value: "" },
              } as React.ChangeEvent<HTMLInputElement>)
            }
            className="absolute right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            <X size={16} />
          </button>
        )}
        {isPassword && !loading && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        )}
      </div>
      {helperText && !invalid && (
        <span className="mt-1 text-xs text-gray-500">{helperText}</span>
      )}
      {invalid && errorMessage && (
        <span className="mt-1 text-xs text-red-500">{errorMessage}</span>
      )}
    </div>
  );
};
