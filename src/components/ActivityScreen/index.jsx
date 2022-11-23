import { useCalls } from "./_utils/useCalls";
import { separateArchivedCalls } from "./_utils/separateArchivedCalls";
import { useState } from "react";
import { Box } from "grommet";
import { archiveCallById } from "../../_utils/requests";
import { Archive, Revert } from "grommet-icons";
import { ScreenToggleButtons } from "./ScreenToggleButtons";
import { SCREEN_STATES } from "./_utils/screenStates";
import { CallsLayout } from "../CallsLayout";

export const ActivityScreen = () => {
  const { calls, setCalls, isLoading } = useCalls();
  const { activityCalls, archivedCalls } = separateArchivedCalls(calls);
  const [currentScreenView, setCurrentScreenView] = useState(
    SCREEN_STATES.IS_NOT_ARCHIVED
  );

  return (
    <Box flex={"grow"}>
      <Box flex={"grow"}>
        {(() => {
          switch (currentScreenView) {
            case SCREEN_STATES.IS_NOT_ARCHIVED:
              return (
                <CallsLayout
                  title={"Activity"}
                  calls={activityCalls}
                  setCalls={setCalls}
                  onClick={(call) => archiveCallById(call.id, true)}
                  Icon={Archive}
                  isLoading={isLoading}
                />
              );
            case SCREEN_STATES.IS_ARCHIVED:
              return (
                <CallsLayout
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

      <ScreenToggleButtons
        currentScreenView={currentScreenView}
        setCurrentScreenView={setCurrentScreenView}
      />
    </Box>
  );
};
