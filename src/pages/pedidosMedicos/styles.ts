import styled from "styled-components";
import { themeSelector } from "../../theme";

export const Container = styled.div`
    position: relative;
    min-height: 100vh;
    max-width: 100vw;
    margin: 0 15%;
`

export const Main = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: ${themeSelector.space(12)};
    width: 100%;

    ${themeSelector.breakpoint("2xl")} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${themeSelector.breakpoint("xl")} {
        grid-template-columns: repeat(1, 1fr);
    }
    ${themeSelector.breakpoint("lg")} {
        padding: ${themeSelector.space(12)} ${themeSelector.space(4)};
        grid-template-columns: repeat(1, 1fr);
    }
    ${themeSelector.breakpoint("md")} {
        padding: ${themeSelector.space(12)} ${themeSelector.space(4)};
        grid-template-columns: repeat(1, 1fr);
    }
    ${themeSelector.breakpoint("sm")} {
        padding: ${themeSelector.space(12)} ${themeSelector.space(4)};
        grid-template-columns: repeat(1, 1fr);
    }
    ${themeSelector.breakpoint("xs")} {
        padding: ${themeSelector.space(12)} ${themeSelector.space(4)};
        grid-template-columns: repeat(1, 1fr);
    }
`