import styled from "styled-components"
import Title from "../Title"
import { livros } from "./data"

const SectionContainer = styled.section`
background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NewBooksContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

const LastReleases = () => {
    return(
        <SectionContainer>
            <Title $color={"#EB9B00"} $background={"#FFF"}>ULTIMOS LANÇAMENTOS</Title>
            <NewBooksContainer>
                {livros.map( livro => <img key={livro.id} src={livro.src}/>)}
            </NewBooksContainer>
        </SectionContainer>
    )
}

export default LastReleases