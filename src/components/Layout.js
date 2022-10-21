import styled, { ThemeProvider } from "styled-components";
import {useState} from "react";
import GlobalStyle from "./GlobalStyle";
import lightTheme from "./themes/light.json";
import darkTheme from "./themes/dark.json";
import Header from "components/Header";
import Footer from "components/Footer";

export default function Layout ({ children }) {
    const [isLight, setIsLight] = useState(true);

    function handleToggleTheme() {
        setIsLight(!isLight)
    }

    return (
        <ThemeProvider theme={isLight ? lightTheme : darkTheme}>
                <Wrapper>
                    <Header isLight={isLight} handleToggleTheme={handleToggleTheme}/>

                    <GlobalStyle />
                        <Main>
                            { children }
                        </Main>
                    <Footer />
                </Wrapper>
        </ThemeProvider>
    );
}

const Wrapper = styled.div``;
const Main = styled.div `
  min-height: calc(100vh - 320px);
  width: 96%;
  max-width: 1240px;
  margin: 32px auto;
`;