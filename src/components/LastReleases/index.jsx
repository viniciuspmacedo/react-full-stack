import styled from "styled-components"
import Title from "../Title"
import { livros } from "./data"
import RecomendationCard from "./RecomendationCard"

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

            <RecomendationCard 
            tile={"Talvez você se interesse por..."} 
            subtitle={"Angular"} 
            description={"Conheça o frameworkweb do Google"}
            imgSrc={"/images/livro2.png"}/>
            
        </SectionContainer>
    )
}

export default LastReleases