import styled, { css } from 'styled-components'

export const List = styled.ul`
    display: flex;
    overflow: scroll;
    width: 100%;
    padding: 0;
    ${props => props.fixed && css`
        max-width: 400px;
        background: #fff;
        padding: 5px;
        border-radius: 60px;
        position: fixed;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: -20px;
        transform: scale(0.5);
        box-shadow: 0 0 20px rgba(0, 0, 0, 0, .2);
        z-index: 1;
    `}
`
export const Item = styled.li`
    list-style: none;
    padding: 0 8px;
`
