import styled from "styled-components"

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;

    &>img{
        margin-right: 10px;
    }
`

const Logo = () => {
    return(
        <LogoContainer>
            <img src="/images/logo.svg" 
            alt="logotipo: um triangulo com bordas laranja e centro vazado" />
            <p><strong>Alura</strong>Books</p>
        </LogoContainer>
    )
}

export default Logo