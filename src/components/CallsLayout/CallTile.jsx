import { useState } from "react";
import { Box, Spinner, Text } from "grommet";
import { DetailOverlay } from "../DetailOverlay";
import styled from "styled-components";
import { primaryLight, primaryLighter } from "../../_utils/colors";
import { CallTileWrapper } from "./CallTileWrapper";

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
      <Box isLoading={isLoading} direction={"row"} justify={"between"}>
        <CallTileWrapper
          onClick={() => setIsDetailOverlayVisible(true)}
          pad={{ horizontal: "small", vertical: "xsmall" }}
          margin={"xsmall"}
          round={"xsmall"}
          flex={"grow"}
        >
          <Text>{call.from}</Text>
        </CallTileWrapper>

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
          justify={"center"}
        >
          {!isLoading ? <Icon /> : <Spinner size={"xsmall"} pad={"none"} />}
        </LabelWrapper>
      </Box>
    </>
  );
};
