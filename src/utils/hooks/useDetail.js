import { useState } from "react";
import { URL_BASE } from "../../constantes/apiconfig";




const useDetail = ( ) => {
    const [page, setpage] = useState(1);
    const [limit,setLimit] = useState(15);
    const [sort,setSort]=useState("")
    console.log(setpage,setLimit,setSort)
    const endpoint = `?_page=${page}&_limit=${limit}${sort?`&_sort=${sort}`: ""}`;
     console.log(`${URL_BASE}${endpoint}`)
 return `${URL_BASE}${endpoint}`
 
 
}

export default useDetail