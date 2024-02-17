import { ComponentProps } from "react";
import { ButtonContainer } from "./styled";

interface ButtonProps extends ComponentProps<"button"> {}

export function Button({...props}: ButtonProps) {
    return <ButtonContainer {...props} />;
}