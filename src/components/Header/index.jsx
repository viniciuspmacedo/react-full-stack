import styled from "styled-components"
import Icons from "./Icons"
import Logo from "../Logo"
import Menu from "./Menu"
import { Link } from "react-router-dom"

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
            <Link to="/">
                <Logo/>
            </Link>
            <Menu/>
            <Icons/>
        </HeaderContainer>
    )
}

export default Header