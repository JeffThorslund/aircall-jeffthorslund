import { useState } from "react";

const Pop = ({ call, color, onClick }) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div
      onClick={() => {
        setIsLoading(true);
        onClick(call).then(() => {
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

export { Pop };
