import { useEffect, useState } from "react";
import { URL_BASE } from "../../constantes/apiconfig";

const useGet = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    const [page, setpage] = useState(1);
    const [limit, setLimit] = useState(15);
    const [sort, setSort] = useState();
  
    const endpoint = `${URL_BASE}?_page=${page}&_limit=${limit}${
      sort ? `&_sort=${sort}` : ""
    }`;


    useEffect(() => {
        setIsLoading(true);
       fetch(endpoint)
        .then((results)=>{
            return results.json();
        })
            .then((results) => {
                console.log(results)
                setData(results);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsError(true);
                setIsLoading(false);
            });
    }, [endpoint]);
  
    return [data, isLoading,page,sort];
};


export default useGet;