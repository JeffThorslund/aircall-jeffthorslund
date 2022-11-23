import Header from "./components/Header";
import styled from "styled-components";
import { Grommet } from "grommet";
import { theme } from "./theme";
import { primaryLightest } from "./_utils/colors";
import { ActivityScreen } from "./components/ActivityScreen";

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
  position: absolute;
  width: 376px;
  height: 666px;
  background: ${primaryLightest.hex()};
  border-radius: 3px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <Grommet theme={theme}>
      <Container>
        <SimulatedScreen>
          <Header />
          <ActivityScreen />
        </SimulatedScreen>
      </Container>
    </Grommet>
  );
}

export default App;
