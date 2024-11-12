import {createGlobalStyle} from "styled-components";
import {HStack} from "@chakra-ui/react";
import styled from "@emotion/styled";
import {Stack} from "@chakra-ui/icons";

export const GlobalStyle = createGlobalStyle`
    a {
        text-decoration: none;
    }

    .animated-link {
        position: relative;
        text-decoration: none;
    }

    .animated-link:hover::before {
        transform: scaleX(1);
    }

    .animated-link::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: #000000;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.3s ease;
    }
`

export const StyledApartmentCardFooter = styled(HStack)`
    display: flex;
    justify-content: space-between;

    .card-link {
        position: relative;
        text-decoration: none;
    }

    .card-link:hover::before {
        transform: scaleX(1);
    }

    .card-link::before {
        content: "";
        position: absolute;
        display: block;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: #000000;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.3s ease;
    }
`

export const StyledOverlay = styled(Stack)`
    position: absolute;
    inset: 0;
    background-color: rgba(38,38,38,0.3);
`
