import { ButtonProps } from "./ButtonProps";

function SecondaryButton({
  onClick,
  className,
  disabled,
  type,
  children,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type ?? "button"}
      className={`flex justify-center items-center py-3 px-6 mx-2 bg-gray-500 text-white hover:bg-gray-700 text-sm text-center font-semibold rounded-full ${className}`}
    >
      {children}
    </button>
  );
}

export default SecondaryButton;
