import styled from "@emotion/styled";
import {Box, Container} from "@chakra-ui/react";

export const StyledNavbar = styled(Box)<{isScrolled: boolean}>`
    background: ${(props) => props.isScrolled ? '#032827' : '#ffffff'};
    position: ${(props) => props.isScrolled ? 'fixed' : 'relative'};
    transition: ${(props) => props.isScrolled ? '300ms' : '300ms'};
    transition: ${(props) => props.isScrolled ? '300ms' : '300ms'};
    top: 0;
    right: 0;
    left: 0;
    z-index: 3;
    width: 100%;

    .nav-link {
        position: relative;
        text-decoration: none;
    }

    .nav-link:hover::before {
        transform: scaleX(1);
    }

    .nav-link::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #BD8F6F;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.3s ease;
    }
`

export const StyledFooter = styled(Container)`
    background-color: #032827;
    color: #BD8F6F;
    
    a:hover {
        text-decoration: none;
    }

    .footer-link {
        position: relative;
        text-decoration: none;
    }

    .footer-link:hover::before {
        transform: scaleX(1);
    }

    .footer-link::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: #BD8F6F;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.3s ease;
    }
`
