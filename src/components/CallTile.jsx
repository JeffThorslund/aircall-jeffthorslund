import { useState } from "react";
import { Box } from "grommet";
import { DetailOverlay } from "./DetailOverlay";

export const CallTile = ({ call, color, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDetailOverlayVisible, setIsDetailOverlayVisible] = useState(false);

  return (
    <>
      {isDetailOverlayVisible ? <DetailOverlay /> : null}
      <Box
        onClick={() => {
          setIsDetailOverlayVisible(true);
          setIsLoading(true);
          onClick(call).finally(() => {
            setIsLoading(false);
          });
        }}
        className={"item"}
        key={call.id}
        style={{ color: isLoading ? "pink" : color }}
      >
        {call.from}
      </Box>
    </>
  );
};
