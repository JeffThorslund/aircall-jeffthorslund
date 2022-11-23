import { Header, Text } from "grommet";
import { primaryDark } from "../_utils/colors";

export const PageHeader = ({ label }) => {
  return (
    <Header direction={"row"} justify={"center"} pad={"small"}>
      <Text size={"xlarge"} color={primaryDark.hex()}>
        {label}
      </Text>
    </Header>
  );
};
