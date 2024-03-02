import { useEffect, useState } from "react"
import styled from "styled-components"
import { deleteFavoriteFromAPI, getFavoriteFromAPI } from "../servicos/favorite"

const HomeContainer = styled.div`
  
  background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: space-evenly;
  
  padding: 36px 80px;

  &>h1{
    color: #FFF;
  }
`
const FavoriteCardContainer = styled.div`
  min-width: 236px;
  height: 360px;
  flex-grow: 0;
  border: 1px solid #FFF;
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;

  div{
    text-align: center;
    height: 120px;
  }

  h4{
    color: #FFF;
    text-align: center;
    margin: 0;
    padding: 0;
  }

  button{
    background-color: #FFF;
    padding: 8px;
    margin-top: 12px;
    border-radius: 8px;

  }

  &:hover{
    transform: scale(1.02);
    transition: all 0.5s;
    box-shadow: 1px 6px 12px gray;
  }
`
const Favorites = () => {
  const [books, setBooks] = useState([])

  async function fetchFavorite() {
    const favoriteFromAPI = await getFavoriteFromAPI()
    setBooks(favoriteFromAPI)
  }

  async function deleteFavorite(id) {
    await deleteFavoriteFromAPI(id)
    fetchFavorite()
  }

  useEffect(() => {
    fetchFavorite()
  }, [])

  return (
    <HomeContainer>
      {books.map(book => {
        return (
          <FavoriteCardContainer>
            <div>
              <h4>{book.nome}</h4>
              <button onClick={()=>deleteFavorite(book.id)}>excluir</button>
            </div>
            <img src={book.src} alt="capa" />
          </FavoriteCardContainer>)
      })}
    </HomeContainer>
  )
}

export default Favorites