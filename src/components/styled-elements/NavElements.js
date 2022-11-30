import styled from 'styled-components';


export const Nav = styled.nav`
    position: fixed;
    width: 100%;
    height: 84px;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.05);
    background-color: white;
    padding: 0 165px;
    display: flex;
    z-index: 100;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 468px) {
        padding: 0px 10px;
    }
`

export const NavLink = styled.a`
    text-decoration: none;
    cursor: pointer;
`