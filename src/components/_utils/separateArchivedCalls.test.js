import { separateArchivedCalls } from "./separateArchivedCalls";

test("blank", () => {
  expect(separateArchivedCalls([])).toEqual({
    archivedCalls: [],
    activityCalls: [],
  });
});
