import Header from "./components/Header";
import styled from "styled-components";
import { ScreenContent } from "./components/ScreenContent";
import { useCalls } from "./_utils/useCalls";
import { Grommet } from "grommet";
import { theme } from "./theme";

const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const SimulatedScreen = styled.div`
  width: 376px;
  height: 666px;
  background: ${(p) => (p.isLoading ? "blue" : "white")};
  border-radius: 3px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
`;

function App() {
  const { calls, setCalls, isLoading } = useCalls();

  return (
    <Grommet theme={theme}>
      <Container>
        <SimulatedScreen isLoading={isLoading}>
          <Header />
          <ScreenContent calls={calls} setCalls={setCalls} />
        </SimulatedScreen>
      </Container>
    </Grommet>
  );
}

export default App;
