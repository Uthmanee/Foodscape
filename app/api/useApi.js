import { useState } from "react";

export default useApi = (dataApi) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  const request = async () => {
    setLoading(true);
    const response = await dataApi();
    setLoading(false);
    setError(!response.ok);
    setData(response.data);
    return response;
  };

  return { data, error, loading, request };
};
