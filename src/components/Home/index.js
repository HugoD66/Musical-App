import styled from "styled-components";
import GridButton from "./GridButton";
import useSounds from "../../hooks/useSounds";



export default function Home() {
    const {buttonList} = useSounds();


    return <Wrapper>
        <Grid>
            {buttonList.map(({ soundPlay, isPlayed }, index) => {
            return (
                <GridButton key={index} soundPlay={soundPlay} isPlayed={isPlayed}/>
            );
            })}
        </Grid>
    </Wrapper>
}

const Wrapper = styled.div`
    
`;

const Grid = styled.div`
  display: grid;
  width: 400px;
  height: 400px;
  border: 1px solid;
  grid-template-columns: 1fr 1fr;
  column-gap: 12px;
  row-gap: 12px;
  padding: 24px;
  margin: 5% auto;


  @media (max-width: 640px) {
  width: 300px;
  height: 350px;
}
  @media (min-width: 900px) {
    display: grid;
    width: 600px;
    height: 400px;
    border: 1px solid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 12px;
    row-gap: 12px;
    padding: 24px;
    margin: 8% auto;
  }
`;