import { Box, Button } from "grommet";
import { SCREEN_STATES } from "./_utils/screenStates";

export const ScreenToggleButtons = ({
  currentScreenView,
  setCurrentScreenView,
}) => {
  return (
    <Box direction={"row"} justify={"around"} pad={"medium"}>
      <Button
        primary={currentScreenView === SCREEN_STATES.IS_NOT_ARCHIVED}
        label={"Activity"}
        onClick={() => setCurrentScreenView(SCREEN_STATES.IS_NOT_ARCHIVED)}
        size={"large"}
      />
      <Button
        primary={currentScreenView === SCREEN_STATES.IS_ARCHIVED}
        label={"Archived"}
        onClick={() => setCurrentScreenView(SCREEN_STATES.IS_ARCHIVED)}
        size={"large"}
      />
    </Box>
  );
};
