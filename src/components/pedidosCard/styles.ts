import styled from "styled-components";
import { themeSelector } from "../../theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    height: 250px;
    justify-content: space-between;
    
    background-color: ${themeSelector.color("gray-100")};
    border-radius: ${themeSelector.borderRadius("xl")};
    padding: ${themeSelector.space(4)};
`

export const NomePaciente = styled.h1`
    font-weight: 500;
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
    border-radius: ${themeSelector.borderRadius("lg")};
    font-weight: 800;
    width: 100%;

    transition: background-color 0.2s ease-in-out;
`

export const DeleteButton = styled.button`
    cursor: pointer;
    background-color: ${themeSelector.color("red-500")};
    &:hover{
        background-color: ${themeSelector.color("red-600")};
    }
    color: white;
    width: 100%;
    padding: ${themeSelector.space(4)};
    line-height: 0;
    border: none;
    border-radius: ${themeSelector.borderRadius("lg")};
    font-weight: 700;

    transition: background-color 0.2s ease-in-out;
`

export const FlexRow  = styled.div`
    display: flex;
    gap: ${themeSelector.space(1)};
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