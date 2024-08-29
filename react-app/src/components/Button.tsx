import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}
const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
