import { useState } from "react";
import { Box, Text } from "grommet";
import { DetailOverlay } from "./DetailOverlay";

export const CallTile = ({ call, color, onClick, Icon }) => {
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
        key={call.id}
        style={{ color: isLoading ? "pink" : color }}
        direction={"row"}
        justify={"between"}
        pad={{ horizontal: "small", vertical: "xxsmall" }}
      >
        <Text>{call.from}</Text>
        <Icon
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
