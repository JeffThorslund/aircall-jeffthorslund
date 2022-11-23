import { CallTile } from "./CallTile";
import { replaceCallWithUpdatedCall } from "../_utils/replaceCallWithUpdatedCall";
import { PageHeader } from "./PageHeader";
import { Box } from "grommet";

export const CallsDisplay = ({ title, calls, onClick, color, setCalls }) => {
  return (
    <div>
      <PageHeader label={title} />
      <div>
        {calls.length ? (
          calls.map((c) => (
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
          ))
        ) : (
          <NoResultsToDisplay />
        )}
      </div>
    </div>
  );
};

export const NoResultsToDisplay = () => {
  return (
    <Box direction={"row"} justify={"center"} pad={"small"}>
      There are no calls in this list.
    </Box>
  );
};
