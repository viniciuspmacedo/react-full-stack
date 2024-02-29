import styled from "styled-components"
import Search from "../components/Search"

const HomeContainer = styled.div`
  
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);

  &>h1{
    color: #FFF;
  }
`

const Favorites = () => {
    return (
        <HomeContainer>
            <h1>Favoritos</h1>
            <Search />
        </HomeContainer>
    )
}

export default Favorites