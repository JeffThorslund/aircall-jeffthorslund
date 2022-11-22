import styled from "styled-components";
import { archiveCallById } from "../requests";
import { separateArchivedCalls } from "./_utils/separateArchivedCalls";
import { CallsDisplay } from "./CallsDisplay";

const ContentWrapper = styled.div`
  padding: 20px;
`;

export const ScreenContent = ({ calls, setCalls }) => {
  const { activityCalls, archivedCalls } = separateArchivedCalls(calls);

  return (
    <ContentWrapper>
      <CallsDisplay
        title={"Activity"}
        calls={activityCalls}
        setCalls={setCalls}
        onClick={(call) => archiveCallById(call.id, true)}
        color={"black"}
      />

      <CallsDisplay
        title={"Archived"}
        calls={archivedCalls}
        setCalls={setCalls}
        onClick={(call) => archiveCallById(call.id, false)}
        color={"red"}
      />
    </ContentWrapper>
  );
};
