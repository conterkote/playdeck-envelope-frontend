import {ButtonHTMLAttributes, DetailedHTMLProps} from "react";
import "./index.css"
function Button({className, children, ...rest} : DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>) {
  return (
    <button {...rest} className={`h-[50px] button border border-[#46A109] min-w-[50px] bg-[#9AD805] rounded-[10px] ${className ?? ""}`}>
      {children}
    </button>
  );
}

export default Button;