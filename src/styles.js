import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cacaca;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    width: 365px;
    height: 635px;
    background-color: #17181a;
    border-radius: 20px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-itens: center;
    margin: 15px 0px 15px 0px;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-itens: center;
`