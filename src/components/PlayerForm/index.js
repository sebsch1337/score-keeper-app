import styled from "styled-components";

const NewPlayer = ({ onCreatePlayer }) => {
  return (
    <PlayerForm onSubmit={onCreatePlayer}>
      <NewPlayerLabel htmlFor="newPlayer">Add Player:</NewPlayerLabel>
      <NewPlayerName name="newPlayer" />
    </PlayerForm>
  );
};

export default NewPlayer;

const PlayerForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const NewPlayerName = styled.input`
  height: 2rem;
  width: 20rem;
  font-size: 1.2em;
  padding: 0.2em;
  border: 2px solid black;
  margin-top: 0.5rem;
`;

const NewPlayerLabel = styled.label`
  margin-top: auto;
`;
