export const replaceCallWithUpdatedCall = (setCalls, newCall) =>
  setCalls((prevCalls) =>
    prevCalls.map((prevCall) => {
      if (newCall.id === prevCall.id) {
        return newCall;
      }

      return prevCall;
    })
  );
