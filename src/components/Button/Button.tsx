import { HTMLProps, ReactNode } from "react";
import { StyledButton } from "./Button.styled";

interface IButton extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  version?: "primary" | "secondary" | "gray";
  isDisabled?: boolean;
}

const Button = ({ children, version = "primary", isDisabled = false, onClick }: IButton) => {
  return (
    <StyledButton type="button" disabled={isDisabled} version={version} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
