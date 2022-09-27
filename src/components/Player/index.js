import styled from "styled-components";
import CalcButton from "../CalcButton";

const Player = ({ name, score }) => {
  return (
    <PlayerItem>
      <PlayerName>{name}</PlayerName>
      <ScoreArea>
        <CalcButton>-</CalcButton>
        <PlayerScore>{score}</PlayerScore>
        <CalcButton>+</CalcButton>
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

const PlayerName = styled.p``;
const PlayerScore = styled.p``;

const ScoreArea = styled.span`
  display: flex;
  gap: 1em;
`;

export default Player;
