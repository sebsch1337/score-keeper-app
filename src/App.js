import styled from "styled-components";
import ScoreBox from "./components/ScoreBox";
import Button from "./components/Button";

function App() {
  return (
    <Main>
      <h1>Scorekeeper Version A</h1>
      <ScoreBox>
        <Button>Reset scores</Button>
        <Button>Reset all</Button>
      </ScoreBox>
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
