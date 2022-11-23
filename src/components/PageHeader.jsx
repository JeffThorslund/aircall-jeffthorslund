import { Header, Text } from "grommet";

export const PageHeader = ({ label }) => {
  return (
    <Header direction={"row"} justify={"center"} pad={"small"}>
      <Text size={"large"}>{label}</Text>
    </Header>
  );
};
