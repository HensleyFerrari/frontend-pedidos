import styled, {css} from "styled-components";
import { themeSelector } from "../../theme";

export const SelectContainer = styled.select<{haserror: boolean}>`
    border: none;
    padding: ${themeSelector.space(3)};
    width: 1190px;
    ${themeSelector.breakpoint("2xl")} {
        width: 1190px;
    }

    ${themeSelector.breakpoint("xl")} {
        width: 970px;
    }

    ${themeSelector.breakpoint("lg")} {
        width: 714px;
    }

    ${themeSelector.breakpoint("sm")} {
        width: 430px;
    }

    ${(haserror) => 
        haserror && css`border-color: ${themeSelector.color("error")}`}
`