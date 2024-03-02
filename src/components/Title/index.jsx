import styled from "styled-components";

const Title = styled.h2`
    color: ${props => props.$fontColor || "#FFF"};
    font-size: ${props => props.$fontSize || "36px"};
    text-align: ${props => props.$align || "center"};
    width: 100%;
    margin-bottom: 18px;
    background-color: ${props => props.$background || "#FFF"};
`

export default Title