import { useState } from "react";
import { Box } from "grommet";

export const CallTile = ({ call, color, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box
      onClick={() => {
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
  );
};
