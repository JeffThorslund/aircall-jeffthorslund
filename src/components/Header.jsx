import React from "react";
import { primaryDark, secondaryLightest } from "../_utils/colors";
import { Box, Text } from "grommet";
import { Swim } from "grommet-icons";
import { secondary } from "../_utils/colors";

const Header = () => {
  return (
    <Box
      justify={"around"}
      align={"center"}
      direction={"row"}
      elevation={"small"}
      background={secondaryLightest.hex()}
      pad={{ horizontal: "medium", vertical: "small" }}
    >
      <Swim size={"large"} color={secondary.hex()} pad={"small"} />
      <Box align={"center"}>
        <Text size={"xxlarge"} color={primaryDark.hex()}>
          ArchDive Virtual
        </Text>
        <Text size={"large"} color={primaryDark.hex()}>
          We love to archive!
        </Text>
      </Box>
    </Box>
  );
};

export default Header;
