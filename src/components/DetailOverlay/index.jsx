import styled from "styled-components";
import { primaryLighter, secondary } from "../../_utils/colors";
import { Box } from "grommet";
import { PageHeader } from "../PageHeader";
import { ValuePresenter } from "./ValuePresenter";
import { CloseButtonInterface } from "./CloseButtonInterface";

export const DetailOverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  border-radius: 3px;
  background-color: ${secondary.lighten(0.7).hex()};
`;

export const DetailOverlay = ({ onClick, call }) => {
  return (
    <DetailOverlayWrapper>
      <CloseButtonInterface onClick={onClick} />
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
          mutation={valueMutations.convertIntegerToMinutesString}
        />
        <ValuePresenter
          label={"At"}
          value={call.created_at}
          mutation={valueMutations.localizeDateString}
        />
        <ValuePresenter
          label={"Direction"}
          value={call.direction}
          mutation={valueMutations.directionTypeLabelDictionary}
        />
        <ValuePresenter
          label={"Call Type"}
          value={call.call_type}
          mutation={valueMutations.callTypeLabelDictionary}
        />
      </Box>
    </DetailOverlayWrapper>
  );
};

const valueMutations = {
  callTypeLabelDictionary(type) {
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
  },
  directionTypeLabelDictionary(dir) {
    switch (dir) {
      case "inbound":
        return "Inbound";
      case "outbound":
        return "Outbound";
      default:
        return "Unknown";
    }
  },
  convertIntegerToMinutesString(seconds) {
    return (
      new Date(seconds * 1000).toISOString().substring(14, 19) + " minutes"
    );
  },
  localizeDateString(time) {
    return new Date(time).toLocaleString();
  },
};
