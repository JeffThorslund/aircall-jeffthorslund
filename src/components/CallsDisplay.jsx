import { CallTile } from "./CallTile";

export const CallsDisplay = ({ title, calls, onClick, color }) => {
  return (
    <div>
      <div>{title}</div>
      <div>
        {calls.map((c) => (
          <CallTile call={c} color={color} onClick={onClick} key={c.id} />
        ))}
      </div>
    </div>
  );
};
