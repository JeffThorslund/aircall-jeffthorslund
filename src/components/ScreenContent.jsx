import styled from "styled-components";
import { archiveCallById, getAllCalls } from "../requests";
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
        onClick={(call) => {
          archiveCallById(call.id, true).then(() => {
            getAllCalls().then((calls) => setCalls(calls));
          });
        }}
        color={"black"}
      />

      <CallsDisplay
        title={"Archived"}
        calls={archivedCalls}
        onClick={(call) => {
          archiveCallById(call.id, false).then(() => {
            getAllCalls().then((calls) => setCalls(calls));
          });
        }}
        color={"red"}
      />
    </ContentWrapper>
  );
};
