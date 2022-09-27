import styled from "styled-components";
import Button from "./components/Button";
import Player from "./components/Player";
import PlayerForm from "./components/PlayerForm";

function App() {
  return (
    <Main>
      <h1>Scorekeeper Version A</h1>
      <PlayerForm>
        <Player>Hans</Player>
        <Player>Wurst</Player>
        <Button>Reset scores</Button>
        <Button>Reset all</Button>
      </PlayerForm>
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
