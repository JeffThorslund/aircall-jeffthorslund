import { Box, Spinner } from "grommet";

export const LoadingSpinner = () => (
  <Box direction={"row"} justify={"center"} align={"center"}>
    <Box>
      <Spinner />
    </Box>
  </Box>
);
