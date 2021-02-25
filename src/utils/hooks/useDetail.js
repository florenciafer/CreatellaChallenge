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
  const handleOnchange = (event) => {
    setSort(event.target.value);
  };
  useEffect(() => {
   return ()=>{
   useDetail();
   }
  }, [page])
 
  useEffect(() => {
    window.addEventListener("scroll",handlescroll);
    return () => {
     window.removeEventListener("scroll",handlescroll);
    }
  }, [])
  // comparar mi heigth widow  + pixeles top scroll es menor a height de mi elemento 
  const handlescroll =()=>{
    if(window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight && page === totalpage &&loading){
      return;
    }
    setpage(page+1)//llega al final de la pagina cambia de page 
  }

  return {
      'useget' : useget(`${URL_BASE}${endpoint}`),
      setSort,
      setpage

  }
};

export default useDetail;
