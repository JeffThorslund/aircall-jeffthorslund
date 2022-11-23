import { useState } from "react";
import { Box, Text } from "grommet";
import { DetailOverlay } from "./DetailOverlay";
import styled from "styled-components";
import { dark, primaryLight, primaryLighter } from "../_utils/colors";
import { TextWrapper } from "./TextWrapper";

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
        isLoading={isLoading}
        direction={"row"}
        justify={"between"}
      >
        <TextWrapper
          onClick={() => setIsDetailOverlayVisible(true)}
          pad={{ horizontal: "small", vertical: "xsmall" }}
          margin={"xsmall"}
          round={"xsmall"}
          flex={"grow"}
        >
          <Text>{call.from}</Text>
        </TextWrapper>

        <LabelWrapper
          onClick={(e) => {
            e.stopPropagation();
            setIsLoading(true);
            onClick(call).finally(() => {
              setIsLoading(false);
            });
          }}
          pad={{ horizontal: "small", vertical: "xsmall" }}
          margin={"xsmall"}
          round={"xsmall"}
        >
          <Icon />
        </LabelWrapper>
      </CallTitleWrapper>
    </>
  );
};
