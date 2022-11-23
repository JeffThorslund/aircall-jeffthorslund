import styled from "styled-components";
import { Box, Text } from "grommet";
import { Close } from "grommet-icons";
import { PageHeader } from "./PageHeader";
import { primaryLighter, secondary } from "../_utils/colors";

export const DetailOverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 3px;
  background-color: ${secondary.lighten(0.7).hex()};
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
      <PageHeader label={"Call Details"} />
      <Box
        pad={"medium"}
        margin={"medium"}
        round={"small"}
        background={primaryLighter.hex()}
        elevation={"medium"}
      >
        <ValuePresenter label={"From"} value={call.from} />
        <ValuePresenter label={"ArchDive Proxy Server"} value={call.via} />
        <ValuePresenter label={"To"} value={call.to} />
        <ValuePresenter
          label={"Call Duration"}
          value={call.duration}
          mutation={(seconds) =>
            new Date(seconds * 1000).toISOString().substring(14, 19) +
            " minutes"
          }
        />
        <ValuePresenter
          label={"At"}
          value={call.created_at}
          mutation={(time) => new Date(time).toLocaleString()}
        />
        <ValuePresenter
          label={"Direction"}
          value={call.direction}
          mutation={(dir) => {
            switch (dir) {
              case "inbound":
                return "Inbound";
              case "outbound":
                return "Outbound";
              default:
                return "Unknown";
            }
          }}
        />
        <ValuePresenter
          label={"Call Type"}
          value={call.call_type}
          mutation={(type) => {
            switch (type) {
              case "missed":
                return "Missed";
              case "answered":
                return "Answered";
              case "voicemail":
                return "Voicemail";
              default:
                return "Unknown";
            }
          }}
        />
      </Box>
    </DetailOverlayWrapper>
  );
};

export const CloseInterface = ({ onClick }) => {
  return (
    <Box direction={"row"} justify={"end"} pad={"small"}>
      <Box onClick={onClick}>
        <Close />
      </Box>
    </Box>
  );
};

export const ValuePresenter = ({ label, value, mutation = (val) => val }) => {
  return (
    <Box pad={{ vertical: "xsmall" }}>
      <Text weight={"bold"}>{label}</Text>
      <Text>{mutation(value)}</Text>
    </Box>
  );
};
