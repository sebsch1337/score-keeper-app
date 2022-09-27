import styled from "styled-components";

const Player = ({ name, score, onAdd, onSubtract }) => {
  return (
    <PlayerItem>
      <PlayerName>{name}</PlayerName>
      <ScoreArea>
        <CalcButton onClick={onSubtract}>-</CalcButton>
        <PlayerScore>{score}</PlayerScore>
        <CalcButton onClick={onAdd}>+</CalcButton>
      </ScoreArea>
    </PlayerItem>
  );
};

const PlayerItem = styled.li`
  width: 100%;
  list-style: none;
  display: flex;
  justify-content: space-between;
`;

const PlayerName = styled.p`
  font-weight: bold;
`;
const PlayerScore = styled.p``;

const ScoreArea = styled.span`
  display: flex;
  gap: 1em;
`;

const CalcButton = styled.button`
  border-radius: 0.5rem;
  border: 2px solid black;
  width: 1.4rem;
  height: 1.4rem;
`;

export default Player;
