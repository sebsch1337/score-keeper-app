import styled from "styled-components";
import ResetButton from "./components/ResetButton";
import Player from "./components/Player";
import PlayerForm from "./components/PlayerForm";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState("");

  useEffect(() => {
    console.log(players);
  }, [players]);

  const onCreateNewPlayer = (event) => {
    event.preventDefault();
    setPlayers((players) => [
      ...players,
      {
        id: uuid().slice(0, 8),
        name: newPlayer,
        score: 0,
      },
    ]);
    setNewPlayer("");
  };

  return (
    <Main>
      <Header>Scorekeeper Version A</Header>
      <PlayerForm onSubmit={onCreateNewPlayer}>
        <PlayerList>
          {players.map((player) => (
            <Player key={player.id} name={player.name} score={player.score} />
          ))}
        </PlayerList>
        <ResetButton>Reset scores</ResetButton>
        <ResetButton>Reset all</ResetButton>
        <Header2>Add Player:</Header2>
        <NewPlayer
          onChange={(event) => setNewPlayer(event.target.value)}
          value={newPlayer}
        />
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
  flex-direction: column;
  justify-content: center;
`;

const NewPlayer = styled.input``;
