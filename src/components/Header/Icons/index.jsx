import styled from "styled-components"


const icons = ['perfil', 'sacola']

const StyledIcon = styled.li`
    margin-right: 40px;
    width: 25px;
`

const IconsContainer = styled.ul`
    display: flex;
    align-items: center;
`

const Icons = () => {
    return(
        <IconsContainer>
            {icons.map( (item, index) => {
               return <StyledIcon key={index}><img src={`/images/${item}.svg`}></img></StyledIcon>
            })}
        </IconsContainer>
    )
}

export default Icons