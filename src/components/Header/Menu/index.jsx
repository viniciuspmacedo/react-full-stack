import styled from "styled-components"

const menuItems = ['CATEGORIAS', ' FAVORITOS', 'MINHA ESTANTE']

const Item = styled.li`
    font-size: 16px;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    min-width: 120px;

    a{
        text-decoration: none;
        color: black;
        height: 100%;
        width: 100%;
        display: inline-block;
    }
`

const ListItems = styled.ul`
    display: flex;
`

const Menu = () => {
    return(
            <nav>
                <ListItems>
                    {menuItems.map( (item, index) => {
                        return <Item key={index}><a href="#">{item}</a></Item>
                    })}
                </ListItems>
            </nav>
    )
}

export default Menu