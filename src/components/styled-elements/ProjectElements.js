import styled from 'styled-components';


export const Container = styled.main`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 160px 165px;
    min-height: 100vh;
    width: 100%;
    max-width: 100vw;
    background-color: #F2F2F2;

    @media screen and (max-width: 1400px) {
        padding: 100px 100px;
    }

    @media screen and (max-width: 1025px) {
        padding: 100px 50px;
    }

    @media screen and (max-width: 900px) {
        padding: 100px 30px;
    }

    @media screen and (max-width: 468px) {
        padding: 100px 10px;
    }
`

export const Section = styled.section`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: fit-content;
    width: 100%;

    @media screen and (max-width: 468px) {
        align-items: center;
    }
`

export const Grid = styled.article`
    display: grid;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    grid-template-columns: repeat(4, auto);
    height: 100%;
    width: 100%;

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(3, auto);
    }

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, auto);
        justify-content: space-around;
    }

    @media screen and (max-width: 468px) {
        grid-template-columns: repeat(1, auto);
        justify-content: center;
    }
`

export const Heading = styled.h1`
    font-size: 45px;

    @media screen and (max-width: 768px) {
        font-size: 35px;
    }

    @media screen and (max-width: 468px) {
        font-size: 30px;
    }
`

export const Subtitle = styled.h3`
    font-size: 22px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 468px) {
        font-size: 18px;
    }
`

export const Button = styled.button`
    border: none;
    text-transform: uppercase;
    width: 100%;
    height: 35px;
    background-color: var(--primary-color);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    padding: 9px 16px;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    font-family: Lato;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;

    &:hover {
            background-color: var(--secondary-color);
            color: black;
        }
`

export const ElementWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    height: fit-content;
    width: 100%;
`