import React, { useEffect, useState } from 'react'
import { URL_BASE } from '../../constantes/apiconfig';


const usescroll = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [data, setData] = useState(null);
    const [totalpage, settotalpage] = useState(0);
    const [listdata, setlistdata] = useState(null)
  
        const [page, setpage] = useState(1);
        const [limit, setLimit] = useState(15);
        const [sort, setSort] = useState();
      
        const endpoint = `${URL_BASE}?_page=${page}&_limit=${limit}${
          sort ? `&_sort=${sort}` : ""}`;

  const getpost = ()=>{
    useEffect(() => {
        setIsLoading(true);
       fetch(endpoint,{
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
    }, []);
  }
    
  useEffect(() => {
    return ()=>{
   getpost();
    }
   }, [page])
  const handlescroll =()=>{
    if(window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight && page === totalpage &&isloading){
      return;
    }
    setpage(page+1)//llega al final de la pagina cambia de page 
  }
    
     
      useEffect(() => {
        window.addEventListener("scroll",handlescroll);
        return () => {
         window.removeEventListener("scroll",handlescroll);
        }
      }, [])
      // comparar mi heigth widow  + pixeles top scroll es menor a height de mi elemento 
 r
    
  
},

export default usescroll
