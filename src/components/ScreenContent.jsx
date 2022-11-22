import styled from "styled-components";
import { archiveCallById, getAllCalls } from "../requests";

const ContentWrapper = styled.div`
  padding: 20px;
`;

export const ScreenContent = ({ calls, setCalls }) => {
  return (
    <ContentWrapper>
      <div>
        Activity
        {calls
          .filter((c) => !c.is_archived)
          .map((c) => (
            <div
              onClick={() => {
                archiveCallById(c.id, true).then(() => {
                  getAllCalls().then((calls) => setCalls(calls));
                });
              }}
              className={"item"}
              key={c.id}
            >
              {c.from}
            </div>
          ))}
      </div>

      <div>
        Archived
        {calls
          .filter((c) => c.is_archived)
          .map((c) => (
            <div
              className={"item"}
              onClick={() =>
                archiveCallById(c.id, false).then(() => {
                  getAllCalls().then((calls) => setCalls(calls));
                })
              }
              style={{ color: "red" }}
              key={c.id}
            >
              {c.from}
            </div>
          ))}
      </div>
    </ContentWrapper>
  );
};
