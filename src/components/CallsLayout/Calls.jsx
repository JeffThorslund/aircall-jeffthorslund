import { NoResultsToDisplay } from "./NoResultsToDisplay";
import { Box } from "grommet";
import { CallTile } from "./CallTile";
import { replaceCallWithUpdatedCall } from "../../_utils/replaceCallWithUpdatedCall";

export const Calls = ({ calls, onClick, setCalls, Icon }) => {
  if (!calls.length) return <NoResultsToDisplay />;

  return (
    <Box pad={"xsmall"}>
      {calls.map((c) => (
        <CallTile
          call={c}
          onClick={() =>
            onClick(c).then((newCall) => {
              replaceCallWithUpdatedCall(setCalls, newCall);
            })
          }
          key={c.id}
          Icon={Icon}
        />
      ))}
    </Box>
  );
};
