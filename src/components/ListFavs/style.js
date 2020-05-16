import styled from 'styled-components'
import { Link } from '@reach/router'

export const A = styled(Link)`
    text-decoration: none;
    border-radius: 3px;
    overflow: hidden;
    height: 100%;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
`
export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 1rem;
`

export const Img = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`
