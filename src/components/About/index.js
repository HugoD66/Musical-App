import styled from "styled-components";
import Git from "assets/picture/icone/github.png";
import Linkedin from "assets/picture/icone/linkedin.png";
import Facebook from "assets/picture/icone/facebook-new.png";



export default function About() {
    return <Wrapper>
            <ul>
                <ol>Nom: DESSAUW</ol>
                <ol>Prénom: Hugo</ol>
                <ol>66000 Perpignan</ol>
                <ol>06.62.56.01.52</ol>
                <ol>dessauw.hugo@gmail.com</ol>
            </ul>
            <p>Cette page a été faite dans le cadre de ma formation à l'école Studi+.
                <br/>
                Pour tout renseignement complémentaire, vous pourrez me contacter via les liens  ci-dessous:
            </p>
            <Liens>
                <a href="https://github.com/HugoD66"><img src={Git} alt="Lien Github"/></a>
                <a href="https://www.linkedin.com/in/hugo-dessauw-07a901250/"><img src={Linkedin} alt="Lien Linkedin"/></a>
                <a href="https://www.facebook.com/hugo.dessauw"><img src={Facebook} alt="Lien Facebook"/></a>
            </Liens>
           </Wrapper>
}
const Wrapper = styled.div`
  margin: 7% auto;
  ul {
    text-align: center;
    margin: 7% auto  ;
    line-height: 1.8rem;
  }
  p {
    text-align: center;
  }
  img {
    &:hover {
      transform: scale(1.2);
      transition: all 0.3s ease-in-out;
    }
  }
`;
const Liens= styled.div`
  margin-top: 7%;
  display: flex;
  justify-content: space-around;
`;
