import styled from "styled-components";
import ScoreBox from "./components/ScoreBox";

function App() {
  return (
    <Main>
      <h1>Scorekeeper Version A</h1>
      <ScoreBox></ScoreBox>
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
