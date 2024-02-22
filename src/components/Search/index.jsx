import styled from "styled-components"
import Input from "../Input"
import Title from "../Title"
import SubTitle from "../SubTitle"
import { useState } from "react"
import { livros } from "./data"

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    text-align: center;
    padding: 85px 0;
    width: 100%;
    height: 100%;
`

const ResultCard = styled.div`
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    border: 1px solid white;
    padding: 8px;
    border-radius: 16px;    
    
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        box-shadow: 2px 2px 4px gray;
        transform: scale(1.02);
        transition-duration: 0.3s;
    }
`

const ResultContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
`

const Search = () => {

    const [searchResult, setSearchResult] = useState([])

    return (
        <SearchContainer>
            <Title $color={"#FFF"} $background={"transparent"}>Já sabe por onde começar?</Title>
            <SubTitle>Encontre o livro em nossa estante</SubTitle>
            <Input type="text" placeholder="Escreva sua próxima leitura."
                onChange={(e) => {
                    const searchedText = e.target.value.toLocaleLowerCase()
                    const result = searchedText ? livros.filter(livro => livro.nome.toLocaleLowerCase().includes(searchedText)) : []
                    setSearchResult(result)
                }}></Input>
            <ResultContainer>
                {searchResult.map(livro => {
                    return (
                        <ResultCard key={livro.id}>
                            <p>{livro.nome}</p>
                            <img src={livro.src} alt="capa do livro" />
                        </ResultCard>
                    )
                })}
            </ResultContainer>
        </SearchContainer>
    )
}

export default Search