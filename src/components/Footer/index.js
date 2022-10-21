import styled from "styled-components";
import Studi from "assets/picture/studi.svg";
import Hd from "assets/picture/logo-hd-removebg.png";

export default function Header() {
    return (
        <Wrapper>
            <img src={Studi} alt="Logo studi"/>

            <Hugo>
                <p>Hugo Dessauw</p>
                <img src={Hd} alt="Logo Hugo Dessauw"/>
            </Hugo>


        </Wrapper>
    );
}
const Hugo=styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  max-height: 80px;
  padding: 10px;
  p {
    text-decoration: underline 1px;
  }
`;
const Wrapper= styled.footer `
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    height: 60%;
    max-height: 60%;
    padding: 10px;

  }
`;