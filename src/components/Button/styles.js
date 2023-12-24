import styled from "styled-components";

export const ButtonContainer = styled.button`
    width: 72px;
    height: 72px;
    background-color: ${(props) => props.color || "#303136"};
    color: #ffffff;
    font-size: 32px;
    border: 0px;
    border-radius: 24px;

    &:hover {
        opacity: 0.6;
    }

    .teste {
        background-color: red;
    }
`
