import { useState } from "react";
import { Box, Text } from "grommet";
import { DetailOverlay } from "./DetailOverlay";
import styled from "styled-components";
import { dark, primaryLight, primaryLighter } from "../_utils/colors";

const CallTitleWrapper = styled(Box)`
  color: ${(p) => (p.isLoading ? "pink" : dark)};
`;

const LabelWrapper = styled(Box)`
  background-color: ${primaryLighter};
  &:hover {
    background-color: ${primaryLight};
  }
`;

export const CallTile = ({ call, onClick, Icon }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDetailOverlayVisible, setIsDetailOverlayVisible] = useState(false);

  return (
    <>
      {isDetailOverlayVisible ? (
        <DetailOverlay
          onClick={() => setIsDetailOverlayVisible(false)}
          call={call}
        />
      ) : null}
      <CallTitleWrapper
        onClick={() => setIsDetailOverlayVisible(true)}
        isLoading={isLoading}
        direction={"row"}
        justify={"between"}
      >
        <LabelWrapper
          pad={{ horizontal: "small", vertical: "xsmall" }}
          margin={"xsmall"}
          round={"xsmall"}
          flex={"grow"}
        >
          <Text>{call.from}</Text>
        </LabelWrapper>

        <LabelWrapper
          pad={{ horizontal: "small", vertical: "xsmall" }}
          margin={"xsmall"}
          round={"xsmall"}
        >
          <Icon
            onClick={(e) => {
              e.stopPropagation();
              setIsLoading(true);
              onClick(call).finally(() => {
                setIsLoading(false);
              });
            }}
          />
        </LabelWrapper>
      </CallTitleWrapper>
    </>
  );
};
