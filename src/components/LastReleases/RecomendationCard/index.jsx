import styled from "styled-components"
import Title from "../../Title"
import SubTitle from "../../SubTitle"

const StyledCard = styled.div`
    border-radius: 8px;
    background-color: #FFF;
    width: 50%;
    margin: 0 auto;
`

const RecomendationCard = ({tile, subtitle, description, imgSrc}) => {
    return(
        <StyledCard>
            <Title $color="#111166" $fontSize="22px">{tile}</Title>
            <SubTitle $color="#111166" $fontWeight = "bold">{subtitle}</SubTitle>
            <p>{description}</p>
            <img src={imgSrc}/>
        </StyledCard>
    )
}

export default RecomendationCard