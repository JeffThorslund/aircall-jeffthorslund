import { CallTile } from "./CallTile";
import { replaceCallWithUpdatedCall } from "../_utils/replaceCallWithUpdatedCall";

export const CallsDisplay = ({ title, calls, onClick, color, setCalls }) => {
  return (
    <div>
      <div>{title}</div>
      <div>
        {calls.map((c) => (
          <CallTile
            call={c}
            color={color}
            onClick={() =>
              onClick(c).then((newCall) =>
                replaceCallWithUpdatedCall(setCalls, newCall)
              )
            }
            key={c.id}
          />
        ))}
      </div>
    </div>
  );
};
