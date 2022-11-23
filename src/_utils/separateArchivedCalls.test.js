import { separateArchivedCalls } from "./separateArchivedCalls";

test("no calls", () => {
  expect(separateArchivedCalls([])).toEqual({
    archivedCalls: [],
    activityCalls: [],
  });
});

const archivedCall = { is_archived: true };
const unarchivedCall = { is_archived: false };

test("single archived call", () => {
  const data = [archivedCall];

  expect(separateArchivedCalls(data)).toEqual({
    archivedCalls: [archivedCall],
    activityCalls: [],
  });
});

test("single unarchived call", () => {
  const data = [unarchivedCall];

  expect(separateArchivedCalls(data)).toEqual({
    archivedCalls: [],
    activityCalls: [unarchivedCall],
  });
});

test("mixed call types", () => {
  const data = [archivedCall, unarchivedCall, archivedCall];

  expect(separateArchivedCalls(data)).toEqual({
    archivedCalls: [archivedCall, archivedCall],
    activityCalls: [unarchivedCall],
  });
});
