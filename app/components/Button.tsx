import { ButtonHTMLAttributes, FC } from "react";
import { cn } from "../lib/utils";

type IButton = ButtonHTMLAttributes<HTMLButtonElement>;
export const PersonButton: FC<IButton> = ({ children, className, ...others }) => {
  return (
    <button
      {...others}
      className={cn(
        "text-14px px-3.5 py-1 rounded-full bg-secondary/40 hover:bg-secondary/60 transition-all  text-foreground-50 active:bg-gradient-to-r from-secondary to-primary",
        className
      )}
    >
      {children}
    </button>
  );
};
export const Button: FC<IButton> = ({ children, ...prev }) => {
  return (
    <button
      {...prev}
      className="flex justify-center items-center px-3.5 py-3 rounded-[5px] w-full bg-gradient-to-r from-secondary to-primary text-lg font-semibold leading-[21.78px] tracking-[-1%] gap-2.5 "
    >
      {children}
    </button>
  );
};
