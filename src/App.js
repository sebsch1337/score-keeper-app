import styled from "styled-components";
import ScoreBox from "./components/ScoreBox";
import Button from "./components/Button";
import Player from "./components/Player";

function App() {
  return (
    <Main>
      <h1>Scorekeeper Version A</h1>
      <ScoreBox>
        <Player>Hans</Player>
        <Player>Wurst</Player>
        <Button>Reset scores</Button>
        <Button>Reset all</Button>
      </ScoreBox>
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
