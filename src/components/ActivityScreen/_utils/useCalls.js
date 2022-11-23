import { useEffect, useState } from "react";
import { getAllCalls } from "../../../_utils/requests";

export const useCalls = () => {
  const [calls, setCalls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getAllCalls()
      .then((data) => setCalls(data))
      .catch(console.error)
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return { calls, setCalls, isLoading };
};
