import styled from "styled-components";

const Input = styled.input`
    border: 1px solid #FFF;
    background-color: transparent;
    padding: 20px 140px;
    border-radius: 50px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder{
        color: #FFF;
        font-size: 16px;
    }

    &:focus{
        outline: 1px solid #FFF;
    }
`

export default Input