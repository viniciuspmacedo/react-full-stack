import styled from "styled-components"
import Icons from "./Icons"
import Logo from "../Logo"
import Menu from "./Menu"

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 120px;

`

const Header = () => {
    return (
        <HeaderContainer>
            <Logo/>
            <Menu/>
            <Icons/>
        </HeaderContainer>
    )
}

export default Header