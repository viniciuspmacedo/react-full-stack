import styled from "styled-components"

const SubTitle = styled.h3`
    color: ${props => props.$color || "#FFF"};
    font-size: ${props => props.$fontSize || "16px"};
    font-weight: ${props => props.$};
    margin-bottom: 40px;
`

export default SubTitle