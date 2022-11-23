import React from "react";
import { primaryDarker } from "../_utils/colors";
import { Box, Text } from "grommet";
import { Swim } from "grommet-icons";
import { secondary } from "../_utils/colors";

const Header = () => {
  return (
    <Box
      justify={"center"}
      align={"center"}
      direction={"row"}
      elevation={"small"}
      background={secondary.lighten(0.7).hex()}
    >
      <Swim size={"large"} color={secondary.hex()} pad={"small"} />
      <Box pad={"small"}>
        <Text size={"xxlarge"} color={primaryDarker.hex()}>
          ArchDive Virtual
        </Text>
        <Text size={"large"} color={primaryDarker.hex()}>
          We love to archive!
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
