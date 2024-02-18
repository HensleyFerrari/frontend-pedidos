import { forwardRef, useId } from "react"
import { Container, HelpText, HelpTextContainer, Label, LabelContainer } from "../Input/styles"
import { TextAreaContainer } from './styles';

type TextAreaProps = {
    label: string
    helpText?: string
} & React.InputHTMLAttributes<HTMLTextAreaElement>

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    ({ label, helpText, ...rest }, ref) => {
        const textId = useId()
        const hasError = helpText

        return (
            <>
                {label && (
                    <LabelContainer>
                        <Label >{label}</Label>
                    </LabelContainer>
                )}
                <Container>
                    <TextAreaContainer id={textId} hasError={true} ref={ref} {...rest} maxLength={100} />
                </Container>

                <HelpTextContainer>
                    {hasError && <HelpText>{helpText}</HelpText>}
                </HelpTextContainer>
            </>
        )
    }
)