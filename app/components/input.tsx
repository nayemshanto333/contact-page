import { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

type Iprops = InputHTMLAttributes<HTMLInputElement>;
type Tprops = TextareaHTMLAttributes<HTMLInputElement>;

const inputClass =
  "w-full rounded-[5px] bg-[#ffffff]/5  border border-[#ffffff]/5 py-3 px-3.5 text-[15px] tracking-[-1%] leading-[16.5px] text-[#ffffff] focus:outline-none focus:border-secondary";

export const Iinput: FC<Iprops> = (props) => {
  const { type, placeholder, ...others } = props;

  return (
    <input
      type={type || "text"}
      placeholder={placeholder}
      {...others}
      className={inputClass}
    />
  );
};
export const TextArea: FC<Tprops> = (props) => {
  const { placeholder, ...others } = props;

  return (
    <textarea
      placeholder={placeholder}
      {...others}
      className={`${inputClass} h-[109px]`}
    />
  );
};
