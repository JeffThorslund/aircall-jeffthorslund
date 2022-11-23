import styled from "styled-components";
import { Box, Header, Text } from "grommet";
import { Close } from "grommet-icons";

export const DetailOverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 3px;
  background-color: bisque;
`;

/**
 * id - unique ID of call
 * created_at - creation date
 * direction - inbound or outbound call
 * from - caller's number
 * to - callee's number
 * via - Aircall number used for the call
 * duration - duration of a call (in seconds)
 * is_archived - call is archived or not
 * call_type - can be a missed, answered or voicemail call.
 */

export const DetailOverlay = ({ onClick, call }) => {
  return (
    <DetailOverlayWrapper>
      <CloseInterface onClick={onClick} />
      <Header justify={"center"}>
        <Text size={"large"}>Call Details</Text>
      </Header>
      <ValuePresenter label={"From"} value={call.from} />
      <ValuePresenter label={"Via"} value={call.via} />
      <ValuePresenter label={"To"} value={call.to} />
      <ValuePresenter
        label={"Call Duration"}
        value={call.duration}
        mutation={(seconds) =>
          new Date(seconds * 1000).toISOString().substring(14, 19)
        }
      />
      <ValuePresenter
        label={"At"}
        value={call.created_at}
        mutation={(time) => new Date(time).toLocaleString()}
      />
    </DetailOverlayWrapper>
  );
};

export const CloseInterface = ({ onClick }) => {
  return (
    <Box direction={"row"} justify={"end"} pad={"small"}>
      <Close onClick={onClick} />
    </Box>
  );
};

export const ValuePresenter = ({ label, value, mutation = (val) => val }) => {
  return (
    <Box pad={{ vertical: "small" }}>
      {label}: {mutation(value)}
    </Box>
  );
};
