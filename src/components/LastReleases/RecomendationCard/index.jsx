import styled from "styled-components"
import Title from "../../Title"

const StyledCard = styled.div`
    border-radius: 8px;
    background-color: #FFF;
    max-width: 50%;
    margin: 0 auto;
    padding: 16px;
    display: flex;
    gap: 16px;

    div{
        display: flex;
        flex-direction: column;

        &>button{
            background-color: #EB9B00;
            color: white;
            border: none;
            height: 32px;
            font-weight: bold;
        }
    }
`

const RecomendationCard = ({tile, subtitle, description, imgSrc}) => {
    return(
        <StyledCard>
            <div>
            <Title $align="start" $fontColor="#111166" $fontSize="22px">{tile}</Title>
            <h4 color="#111166" fontWeight = "bold">{subtitle}</h4>
            <p>{description}</p>
            </div>
            <div>
            <img src={imgSrc}/>
            <button>Saiba mais</button>
            </div>
        </StyledCard>
    )
}

export default RecomendationCard