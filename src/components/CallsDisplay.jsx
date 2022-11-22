export const CallsDisplay = ({ title, calls, onClick, color }) => {
  return (
    <div>
      <div>{title}</div>
      <div>
        {calls.map((c) => (
          <div
            onClick={() => onClick(c)}
            className={"item"}
            key={c.id}
            style={{ color }}
          >
            {c.from}
          </div>
        ))}
      </div>
    </div>
  );
};
