import { archiveCallById } from "../requests";
import { separateArchivedCalls } from "../_utils/separateArchivedCalls";
import { CallsDisplay } from "./CallsDisplay";
import { Box, Button } from "grommet";
import { useState } from "react";
import { Archive, Revert } from "grommet-icons";
import { useCalls } from "../_utils/useCalls";

const TabToggle = ({ currentScreenView, setCurrentScreenView }) => {
  return (
    <Box direction={"row"} justify={"around"} pad={"medium"}>
      <Button
        primary={currentScreenView === CALL_STATUS.IS_NOT_ARCHIVED}
        label={"Activity"}
        onClick={() => setCurrentScreenView(CALL_STATUS.IS_NOT_ARCHIVED)}
        size={"large"}
      />
      <Button
        primary={currentScreenView === CALL_STATUS.IS_ARCHIVED}
        label={"Archived"}
        onClick={() => setCurrentScreenView(CALL_STATUS.IS_ARCHIVED)}
        size={"large"}
      />
    </Box>
  );
};

const CALL_STATUS = {
  IS_ARCHIVED: "isArchived",
  IS_NOT_ARCHIVED: "isNotArchived",
};

export const ScreenContent = () => {
  const { calls, setCalls, isLoading } = useCalls();
  const { activityCalls, archivedCalls } = separateArchivedCalls(calls);
  const [currentScreenView, setCurrentScreenView] = useState(
    CALL_STATUS.IS_NOT_ARCHIVED
  );

  return (
    <Box flex={"grow"}>
      <Box flex={"grow"}>
        {(() => {
          switch (currentScreenView) {
            case CALL_STATUS.IS_NOT_ARCHIVED:
              return (
                <CallsDisplay
                  title={"Activity"}
                  calls={activityCalls}
                  setCalls={setCalls}
                  onClick={(call) => archiveCallById(call.id, true)}
                  Icon={Archive}
                  isLoading={isLoading}
                />
              );
            case CALL_STATUS.IS_ARCHIVED:
              return (
                <CallsDisplay
                  title={"Archived"}
                  calls={archivedCalls}
                  setCalls={setCalls}
                  onClick={(call) => archiveCallById(call.id, false)}
                  Icon={Revert}
                  isLoading={isLoading}
                />
              );
            default:
              return <Box>Uh Oh</Box>;
          }
        })()}
      </Box>

      <TabToggle
        currentScreenView={currentScreenView}
        setCurrentScreenView={setCurrentScreenView}
      />
    </Box>
  );
};
