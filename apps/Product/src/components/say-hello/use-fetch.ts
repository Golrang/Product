import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = () => {
  const [data, setdata] = useState<any>(undefined);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState<any>(undefined);

  const fetcher = async () => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/posts/1"
      );

      setdata(res.data);
    } catch (error) {
      seterror(error);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    setloading(true);
    fetcher();
  }, []);
  return { data, loading, error };
};
