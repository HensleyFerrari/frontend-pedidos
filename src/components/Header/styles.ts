import styled from "styled-components";
import { themeSelector } from "../../theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
    margin: auto;
    max-width: 1200px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${themeSelector.breakpoint("2xl")} {
        padding: ${themeSelector.space(4)};
    }

    ${themeSelector.breakpoint("sm")} {
        margin-top: ${themeSelector.space(6)};
        padding: ${themeSelector.space(4)}; 
    }
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

    transition: all 0.3s ease-in-out;
`

export const Logo = styled.img`
    width: ${themeSelector.space(32)};
    
`