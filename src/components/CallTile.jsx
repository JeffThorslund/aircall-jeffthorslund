import { useState } from "react";

export const CallTile = ({ call, color, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
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
    </div>
  );
};
