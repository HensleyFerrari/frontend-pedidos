import styled, {css} from "styled-components";
import { themeSelector } from "../../theme";

export const SelectContainer = styled.select<{haserror: boolean}>`
    border: none;
    padding: ${themeSelector.space(3)};
    width: 1190px;
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

    ${(haserror) => 
        haserror && css`border-color: ${themeSelector.color("error")}`}
`