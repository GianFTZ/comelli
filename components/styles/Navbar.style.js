import styled from "styled-components";


export const NavbarContainer = styled.nav`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;

`
export const LeftContainer = styled.div`
    padding-top: 1.5%;
    flex: 50%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`

export const  RightContainer = styled.div`
    flex: 50%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
`
export const NavbarInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`;

export const NavbarLinkContainer = styled.div`

`

export const NavbarLink = styled.div`
    display: inline;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`
export const NavbarLinkA = styled.a`
    color: black;
    &:hover {
        color: orange
    }
`
export const NavbarLinkLogo = styled.img`
    border: 10px;
    padding-top: 4.2%;
    height: 100%;
    width: 60%;
    
`
export const NavbarLinkLogoFoto = styled.img`
    padding-top: 2px;
    padding-left: 10%;
    width: 114px;
`



export const NavbarExtendedContainer = styled.div`

`