import { PageHeader } from "../PageHeader";
import { LoadingSpinner } from "./LoadingSpinner";
import { Calls } from "./Calls";

export const CallsLayout = ({
  title,
  calls,
  onClick,
  setCalls,
  Icon,
  isLoading,
}) => {
  return (
    <div>
      <PageHeader label={title} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Calls
          calls={calls}
          onClick={onClick}
          setCalls={setCalls}
          Icon={Icon}
        />
      )}
    </div>
  );
};
