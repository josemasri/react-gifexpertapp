import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGifs(category).then((images) =>
      setState({ ...state, data: images, loading: false })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};
