import styled from "styled-components";
import { themeSelector } from "../../theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${themeSelector.space(8)} ${themeSelector.space(52)};
    background-color: ${themeSelector.color("gray-50")};
    margin-bottom: ${themeSelector.space(5)};
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${themeSelector.space(4)};
`

export const NavLink = styled(Link)`
    text-decoration: none;
    font-weight: 700;

    color: ${themeSelector.color("primary")};
    font-size: ${themeSelector.space(4)};

    &:hover {
        color: ${themeSelector.color("blue-500")}
    }

    transition: all 0.3s ease-in-out;
`

export const Logo = styled.img`
    width: ${themeSelector.space(32)};
    
`