import { Header, Text } from "grommet";
import { primaryDarker } from "../_utils/colors";

export const PageHeader = ({ label }) => {
  return (
    <Header direction={"row"} justify={"center"} pad={"small"}>
      <Text size={"xxlarge"} color={primaryDarker.hex()}>
        {label}
      </Text>
    </Header>
  );
};
