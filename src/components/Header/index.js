import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

export default function Header( {isLight, handleToggleTheme} ) {
    const location = useLocation();
    return (
      <Wrapper>
          <h1>Projet musical</h1>
          <nav>
              <Link to ="/">
                  <MenuEL isCurrentPage={location.pathname === "/"}>
                      Jouer
                  </MenuEL>
              </Link>
              <Link to ="/about">
                  <MenuEL isCurrentPage={location.pathname === "/about"}>
                      A propos
                  </MenuEL>
              </Link>
          </nav>
          <Button onClick={handleToggleTheme}>
              Définir thème {isLight ? "sombre" : "clair"}.
          </Button>

      </Wrapper>
    );
}

const Wrapper= styled.header `
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0px 25px;
    align-items: center;
    & a {
      text-decoration: none;
      color: inherit;
    }
    & a:first-child {
      margin-right: 17px;
    }
`;
const Button = styled.button `
  padding: 15px;
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.backgroundColor};
  width: 12%;
  @media (max-width: 640px) {
    width: 20%;
  }
`;
const MenuEL=styled.p`
  display: inline-block;
  padding: 2px;
  border-bottom: solid 2px ${props => props.isCurrentPage ? "": "transparent"};
  @media (max-width: 640px) {
    display: flex;
  }
  &:hover {
    border-bottom: solid 2px;
  }
`;