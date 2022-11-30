import styled from "styled-components";

export const CardContainer = styled.div`
    width: 255px;
    height: 330px;
    background-color: transparent;
    border: none;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    margin: 25px 0px;
    animation: card 0.5s ease-in-out 1;

    @keyframes card {
        from {
        opacity: 0;
        transform: translateY(10px);
        }
        to {
        opacity: 1;
        transform: translateY(0px);
        }
    }
`;

export const CardImageWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 55%;
    background-color: white;
    border: none;
    border-radius: 4px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
`;

export const CardImage = styled.img`
    position: absolute;
    object-fit: contain;
    height: 95%;
    width: 95%;
    bottom: 0px;
    z-index: 1;
    transition: all 0.2s ease-in-out;

    &:hover {
        height: 100%;
        width: 100%;
    }
`;

export const CardTitle = styled.h2`
    font-size: 20px;
    height: 20px;
`;

export const CardText = styled.p`
    text-align: left;
    font-family: Lato;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    height: 16px;
`;
