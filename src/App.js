import styled from "styled-components";
import ResetButton from "./components/ResetButton";
import Player from "./components/Player";
import PlayerForm from "./components/PlayerForm";
import { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

function App() {
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState("");

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

  const onAdd = (playerId) => {
    setPlayers((players) =>
      players.map((player) => ({
        ...player,
        score: player.id === playerId ? player.score++ : player.score,
      }))
    );
  };

  const onSubtract = (playerId) => {
    setPlayers((players) =>
      players.map((player) => ({
        ...player,
        score: player.id === playerId ? player.score-- : player.score,
      }))
    );
  };

  const onResetScores = () =>
    setPlayers((players) => players.map((player) => ({ ...player, score: 0 })));

  const onResetAll = () => setPlayers([]);

  return (
    <Main>
      <Header>Scorekeeper Version A</Header>
      <PlayerContainer>
        <PlayerList>
          {players.map((player) => (
            <Player
              key={player.id}
              name={player.name}
              score={player.score}
              onAdd={() => onAdd(player.id)}
              onSubtract={() => onSubtract(player.id)}
            />
          ))}
        </PlayerList>
        <ResetButton onClick={onResetScores}>Reset scores</ResetButton>
        <ResetButton onClick={onResetAll}>Reset all</ResetButton>
        <PlayerForm onSubmit={onCreateNewPlayer}>
          <Header2>Add Player:</Header2>
          <NewPlayer
            onChange={(event) => setNewPlayer(event.target.value)}
            value={newPlayer}
          />
        </PlayerForm>
      </PlayerContainer>
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

const PlayerContainer = styled.section`
  width: 25rem;
  border: 3px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1em;
  gap: 1em;
`;
