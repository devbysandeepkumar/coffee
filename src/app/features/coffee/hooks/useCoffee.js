import { useState } from "react";
import { searchCoffee } from "../services/coffeeApi";

export const useCoffee = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchCoffee = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const result = await searchCoffee(query);
      setData(result);
      return result;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, data, fetchCoffee };
};
