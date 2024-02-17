import styled, { css } from "styled-components";
import { themeSelector } from "../../theme";

export const TextAreaContainer = styled.textarea<{hasError: boolean}>`
    border: none;
    width: 1200px;
    ${themeSelector.breakpoint("2xl")} {
        width: 1200px;
    }

    ${themeSelector.breakpoint("xl")} {
        width: 980px;
    }

    ${themeSelector.breakpoint("lg")} {
        width: 724px;
    }

    ${themeSelector.breakpoint("sm")} {
        width: 440px;
    }

    ${(hasError) => 
        hasError && css`border-color: ${themeSelector.color("error")}`}
`