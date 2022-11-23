import styled from "styled-components";
import { Box } from "grommet";
import { primaryLight, primaryLighter } from "../../_utils/colors";

const LabelWrapper = styled(Box)`
  background-color: ${primaryLighter};
  &:hover {
    background-color: ${primaryLight};
  }
`;

export const CallTileWrapper = ({ children, ...props }) => {
  return (
    <LabelWrapper pad={"small"} margin={"xsmall"} round={"xsmall"} {...props}>
      {children}
    </LabelWrapper>
  );
};
