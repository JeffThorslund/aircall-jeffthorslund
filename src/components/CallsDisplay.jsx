import { Pop } from "./Pop";

export const CallsDisplay = ({ title, calls, onClick, color }) => {
  return (
    <div>
      <div>{title}</div>
      <div>
        {calls.map((c) => (
          <Pop call={c} color={color} onClick={onClick} key={c.id} />
        ))}
      </div>
    </div>
  );
};
