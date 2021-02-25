import { useState } from "react";
import { URL_BASE } from "../../constantes/apiconfig";
import useget from "./useget";

const useDetail = () => {
  const [page, setpage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [sort, setSort] = useState();

  const endpoint = `?_page=${page}&_limit=${limit}${
    sort ? `&_sort=${sort}` : ""
  }`;

  return {
      'useget' : useget(`${URL_BASE}${endpoint}`),
      setSort,
      setpage

  }
};

export default useDetail;
