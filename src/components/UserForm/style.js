import styled from 'styled-components'

export const Input = styled.input`
    display: block;
    width: 95%;
    border-radius: 3px;
    border: solid 1px #ccc;
    margin: 10px 0;
    padding: 4px 8px;
    &[disabled] {
        opacity: .3;
    }
`

export const Title = styled.h2`
    text-align: center;
    font-weight: 500;
    font-size: 18px;
`
export const Form = styled.form`
    margin: 5px 10px 20px 10px;
    &[disabled] {
        opacity: .3;
    }
`
export const Error = styled.span`
    color: red;
    font-size: 14px;
`
