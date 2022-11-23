import { Box } from "grommet";
import { Close } from "grommet-icons";

export const CloseButtonInterface = ({ onClick }) => {
  return (
    <Box direction={"row"} justify={"end"} pad={"small"}>
      <Box onClick={onClick}>
        <Close />
      </Box>
    </Box>
  );
};
