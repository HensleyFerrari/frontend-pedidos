import styled from "styled-components";
import { themeSelector } from "../../theme";

export const ButtonContainer = styled.button`
    background-color: ${themeSelector.color("primary")};
    cursor: pointer;
    border: none;
    color: #fff;
    height: ${themeSelector.space(12)};
    font-size: ${themeSelector.space(4)};
    margin-top: ${themeSelector.space(5)};
    border-radius: ${themeSelector.borderRadius("xl")};
    width: 1200px;
    font-weight: 700;

    transition: all 0.2s ease-in-out;

    &:hover {
        background: ${themeSelector.color("blue-800")};        
    }

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
`