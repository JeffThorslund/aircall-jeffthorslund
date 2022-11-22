export const separateArchivedCalls = (calls) => {
  const activityCalls = [];
  const archivedCalls = [];

  calls.forEach((call) => {
    if (!call.is_archived) return activityCalls.push(call);
    return archivedCalls.push(call);
  });

  return { activityCalls, archivedCalls };
};
