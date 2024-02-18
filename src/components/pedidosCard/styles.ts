import styled from "styled-components";
import { themeSelector } from "../../theme";

export const Container = styled.div`
    max-width: 600px;
    height: 200px;

    position: relative;
    background-color: ${themeSelector.color("gray-50")};
    border-radius: ${themeSelector.borderRadius("xl")};
    padding: ${themeSelector.space(4)};
`

export const NomePaciente = styled.h1`
    font-weight: 400;
    color: ${themeSelector.color("textColor")};
    font-size: 20px;
`

export const Info = styled.h2`
    font-weight: 400;
    color: ${themeSelector.color("textColor")};
    font-size: 15px;
`
export const EditButton = styled.button`
    cursor: pointer;
    background-color: ${themeSelector.color("green-500")};
    &:hover{
        background-color: ${themeSelector.color("green-600")};
    }

    padding: ${themeSelector.space(4)};
    line-height: 0;
    border: none;
    border-radius: ${themeSelector.borderRadius("md")};

    transition: background-color 0.2s ease-in-out;
`

export const DeleteButton = styled.button`
    cursor: pointer;
    background-color: ${themeSelector.color("red-500")};
    &:hover{
        background-color: ${themeSelector.color("red-600")};
    }
    color: white;
    padding: ${themeSelector.space(4)};
    line-height: 0;
    border: none;
    border-radius: ${themeSelector.borderRadius("md")};

    transition: background-color 0.2s ease-in-out;
`

export const FlexRow  = styled.div`
    display: flex;
    gap: ${themeSelector.space(4)};
`

export const FlexBetween = styled.div`
    display: flex;
    justify-content: space-between;
`

export const Wrapper = styled.div`
    display: flex;
    gap: ${themeSelector.space(3)};
    flex-direction: column;
`