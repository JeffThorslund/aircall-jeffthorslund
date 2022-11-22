import Header from "./components/Header";
import styled from "styled-components";
import { ScreenContent } from "./components/ScreenContent";
import { useEffect, useState } from "react";
import { getAllCalls } from "./requests";

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
  z-index: 100;
  background: ${(p) => (p.isLoading ? "blue" : "white")};
  border-radius: 3px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.9);
`;

function App() {
  const [calls, setCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllCalls()
      .then((data) => setCalls(data))
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      <SimulatedScreen isLoading={isLoading}>
        <Header />
        <ScreenContent calls={calls} setCalls={setCalls} />
      </SimulatedScreen>
    </Container>
  );
}

export default App;
