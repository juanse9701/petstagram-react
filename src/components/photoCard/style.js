import styled from 'styled-components'
import { fadeIn } from '../../assets/animations/animations'

export const Article = styled.article`
    min-height: 200px;
`

export const Div = styled.div`
    border-radius: 10px;
    display: block;
    overflow: hidden;
    height: 0;
    padding: 56.25% 0 0 0;
    position: relative;
    width: 100%;
`

export const Img = styled.img`
    ${fadeIn()}
    box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    object-fit: cover;
`
