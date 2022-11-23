import { CallTile } from "./CallTile";
import { replaceCallWithUpdatedCall } from "../_utils/replaceCallWithUpdatedCall";
import { PageHeader } from "./PageHeader";
import { Box } from "grommet";

export const CallsDisplay = ({ title, calls, onClick, setCalls, Icon }) => {
  return (
    <div>
      <PageHeader label={title} />
      <div>
        {calls.length ? (
          calls.map((c) => (
            <CallTile
              call={c}
              onClick={() =>
                onClick(c).then((newCall) =>
                  replaceCallWithUpdatedCall(setCalls, newCall)
                )
              }
              key={c.id}
              Icon={Icon}
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
