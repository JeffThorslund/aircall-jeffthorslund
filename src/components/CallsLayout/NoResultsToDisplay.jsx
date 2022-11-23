import { Box } from "grommet";

export const NoResultsToDisplay = () => {
  return (
    <Box direction={"row"} justify={"center"} pad={"small"}>
      There are no calls in this list.
    </Box>
  );
};
