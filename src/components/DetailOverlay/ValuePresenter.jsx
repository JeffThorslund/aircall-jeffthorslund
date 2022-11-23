import { Box, Text } from "grommet";

export const ValuePresenter = ({ label, value, mutation = (val) => val }) => {
  return (
    <Box pad={{ vertical: "xsmall" }}>
      <Text weight={"bold"}>{label}</Text>
      <Text>{mutation(value)}</Text>
    </Box>
  );
};
