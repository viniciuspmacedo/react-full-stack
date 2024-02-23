import styled from "styled-components";

const Title = styled.h2`
    color: ${props => props.$color || "#FFF"};
    font-size: ${props => props.$fontSize || "36px"};
    text-align: center;
    width: 100%;
    margin-bottom: 12px;
    background-color: ${props => props.$background || "#FFF"};
    padding: 32px;
`

export default Title