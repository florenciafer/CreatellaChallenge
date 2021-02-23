import { useEffect, useState } from "react";

const useGet = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        setIsLoading(true);
       fetch(url)
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
    }, [url]);
  
    return [data, isLoading, isError];
};


export default useGet;