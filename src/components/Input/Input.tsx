import {
  Container,
  LabelContainer,
  Label,
  InputContainer,
  HelpText,
  HelpTextContainer,
} from "./styles";
import { forwardRef, useId } from "react";

type InputProps = {
  label: string;
  helpText?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, type, name, helpText, ...rest }, ref) => {
    const inputId = useId();
    const hasError = helpText;
    return (
      <>
        {label && (
          <LabelContainer>
            <Label>{label}</Label>
          </LabelContainer>
        )}
        <Container>
          <InputContainer
            id={inputId}
            type={type}
            name={name}
            {...rest}
            ref={ref}
            hasError={true}
          />
        </Container>

        <HelpTextContainer>
          {hasError && <HelpText>{helpText}</HelpText>}
        </HelpTextContainer>
      </>
    );
  }
);
