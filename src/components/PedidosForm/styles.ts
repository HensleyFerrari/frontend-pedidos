import styled from "styled-components";
import { themeSelector } from "../../theme";

export const Container = styled.form`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    border-radius: ${themeSelector.borderRadius("md")};
    padding: ${themeSelector.space(4)};
    color: ${themeSelector.color("textColor")};
`