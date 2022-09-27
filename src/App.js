import styled from "styled-components";
import ResetButton from "./components/ResetButton";
import Player from "./components/Player";
import PlayerForm from "./components/PlayerForm";
import { useState } from "react";

function App() {
  const [players, setPlayers] = useState([]);

  return (
    <Main>
      <Header>Scorekeeper Version A</Header>
      <PlayerForm>
        <PlayerList>
          <Player name="John Doe" score={9} />
        </PlayerList>
        <ResetButton>Reset scores</ResetButton>
        <ResetButton>Reset all</ResetButton>
        <Header2>Add Player:</Header2>
        <NewPlayer />
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

const Header2 = styled.h2`
  margin-top: auto;
`;

const PlayerList = styled.ul`
  width: 80%;
  display: flex;
  justify-content: center;
`;

const NewPlayer = styled.input``;
