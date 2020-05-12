import styled from 'styled-components'
import { Link } from '@reach/router'
import { fadeIn } from '../../assets/animations/animations'

export const Navbar = styled.nav`
    position: fixed;
    max-width: 500px;
    bottom: 0;
    z-index: 1000;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 15px;
    background-color: #ffffff;
`
export const A = styled(Link)`
    text-decoration: none;
    display: inline-flex;
    justify-content: center;
    &[aria-current] {
        color: black;

        &::after {
            ${fadeIn()}
            content: '.';
            font-size: 34px;
            position: absolute;
            bottom: 0;
        }
    }
    color: lightgray;
`
