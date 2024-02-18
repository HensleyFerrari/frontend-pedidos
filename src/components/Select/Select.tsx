import { SelectContainer } from "./styles";
import {
  Container,
  HelpText,
  HelpTextContainer,
  Label,
  LabelContainer,
} from "../Input/styles";
import { forwardRef, useId } from "react";

type Options = {
  nome: string;
};

type SelectProps = {
  label: string;
  helpText?: string;
  options: Options[];
  placeholder: string;
} & React.InputHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, helpText,placeholder, options, ...rest }, ref) => {
    const selectId = useId();
    const haserror = helpText;

    return (
      <>
        {label && (
          <LabelContainer>
            <Label>{label}</Label>
          </LabelContainer>
        )}
        <Container>
          <SelectContainer id={selectId} haserror={true} ref={ref} {...rest}>
            <option disabled selected>
              {placeholder}
            </option>
            {options.map((item, index) => {
              return (
                <option key={index} value={item.nome}>
                  {item.nome}
                </option>
              );
            })}
          </SelectContainer>
        </Container>

        <HelpTextContainer>
          {haserror && <HelpText>{helpText}</HelpText>}
        </HelpTextContainer>
      </>
    );
  }
);

export default Select;
