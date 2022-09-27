import styled from "styled-components";
import { useState } from "react";
import { v4 as uuid } from "uuid";

import Player from "./components/Player";
import NewPlayer from "./components/PlayerForm";

function App() {
  const [players, setPlayers] = useState([]);

  const onCreatePlayer = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    const newPlayer = event.target.elements.newPlayer.value;
    newPlayer &&
      setPlayers((players) => [
        ...players,
        {
          id: uuid().slice(0, 8),
          name: newPlayer,
          score: 0,
        },
      ]);
    event.target.reset();
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
        <NewPlayer onCreatePlayer={onCreatePlayer} />
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

const PlayerList = styled.ul`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;
`;

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

const ResetButton = styled.button`
  border-radius: 0.5rem;
  border: 2px solid black;
  width: 10rem;
  padding: 0.5rem;
`;
