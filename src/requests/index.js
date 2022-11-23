const AIRCALL_ENDPOINT = "https://aircall-job.herokuapp.com";

export const getAllCalls = () => {
  const createEndpoint = () => AIRCALL_ENDPOINT + "/activities";

  return fetch(createEndpoint()).then((response) => response.json());
};

export const archiveCallById = (id, newArchiveState) => {
  const createEndpoint = (id) => AIRCALL_ENDPOINT + "/activities/" + id;

  const bodyData = {
    is_archived: newArchiveState,
  };

  return fetch(createEndpoint(id), {
    method: "POST",
    body: JSON.stringify(bodyData),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
