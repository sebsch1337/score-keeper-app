import styled from "styled-components";
import ResetButton from "./components/ResetButton";
import Player from "./components/Player";
import PlayerForm from "./components/PlayerForm";

function App() {
  return (
    <Main>
      <Header>Scorekeeper Version A</Header>
      <PlayerForm>
        <PlayerList>
          <Player name="John Doe" score={9} />
        </PlayerList>
        <ResetButton>Reset scores</ResetButton>
        <ResetButton>Reset all</ResetButton>
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

const Header = styled.h1`
  padding: 1em;
`;

const PlayerList = styled.ul`
  width: 90%;
  display: flex;
  justify-content: center;
`;
