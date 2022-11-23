import { useState } from "react";
import { Box } from "grommet";
import { DetailOverlay } from "./DetailOverlay";

export const CallTile = ({ call, color, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDetailOverlayVisible, setIsDetailOverlayVisible] = useState(false);

  return (
    <>
      {isDetailOverlayVisible ? (
        <DetailOverlay
          onClick={() => setIsDetailOverlayVisible(false)}
          call={call}
        />
      ) : null}
      <Box
        onClick={() => setIsDetailOverlayVisible(true)}
        className={"item"}
        key={call.id}
        style={{ color: isLoading ? "pink" : color }}
      >
        {call.from}
        <ArchiveIcon
          onClick={(e) => {
            e.stopPropagation();
            setIsLoading(true);
            onClick(call).finally(() => {
              setIsLoading(false);
            });
          }}
        />
      </Box>
    </>
  );
};

const ArchiveIcon = ({ onClick }) => {
  return <Box onClick={onClick}>A</Box>;
};
