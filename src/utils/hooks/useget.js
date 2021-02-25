import { useEffect, useState } from "react";

const useGet = (url) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);
    const [totalpage, settotalpage] = useState(0);
    const [listdata, setlistdata] = useState(null)
    

    console.log(url);
    useEffect(() => {
        setIsLoading(true);
       fetch(url,{
           method:"GET"
       })
       
        .then((results)=>{
            /* settotalpage(response.headers.get) */
            return results.json();
        })
            .then((results) => {
                console.log(results)
                setlistdata(data)
                setData([...data, ...listdata])
                setIsLoading(false);
            })
            .catch((error) => {
                setIsError(true);
                setIsLoading(false);
            });
    }, [url]);
  
    return [data, isLoading, isError,totalpage,setData];
};


export default useGet;