import styled from "styled-components";
import Button from "../Button";

const Player = ({ name, score }) => {
  return (
    <PlayerItem>
      <PlayerName>{name}</PlayerName>
      <ScoreArea>
        <Button text="-" width="1.4rem" height="1.4rem" />
        <PlayerScore>{score}</PlayerScore>
        <Button width="1.4rem" height="1.4rem" />
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
