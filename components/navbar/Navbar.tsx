import react from 'react';


import { 
    NavbarContainer,
     LeftContainer,
      RightContainer,
       NavbarInnerContainer,
        NavbarExtendedContainer,
         NavbarLinkContainer,
         NavbarLink,
         NavbarLinkA,
         NavbarLinkLogo,
         NavbarLinkLogoFoto,
        } from '../styles/Navbar.style';


interface NavBarProps {
    svg?: string;
}

const NavBar = (props: NavBarProps) => {
    return (
        <NavbarContainer>

            <NavbarInnerContainer>

                <LeftContainer> 

                    <NavbarLinkContainer>
                        <NavbarLink>
                            <NavbarLinkA>
                                Home
                            </NavbarLinkA>
                        </NavbarLink>
                        <NavbarLink >
                            <NavbarLinkA>
                                Casas
                            </NavbarLinkA>
                        </NavbarLink>
                        <NavbarLink >
                            <NavbarLinkA>
                                Terrenos
                            </NavbarLinkA>
                        </NavbarLink>
                        

                    </NavbarLinkContainer>
                        
                </LeftContainer>

                <RightContainer>
                    <NavbarLinkContainer>

                        <NavbarLinkLogo src='image.svg'/>
                        <NavbarLinkLogoFoto src='perfilFoto.png'/>
                    </NavbarLinkContainer>
                </RightContainer>

            </NavbarInnerContainer>

            <NavbarExtendedContainer></NavbarExtendedContainer>

        </NavbarContainer>
    )
}

export default NavBar;