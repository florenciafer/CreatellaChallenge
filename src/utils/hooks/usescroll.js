import React, { useEffect, useState } from 'react'


const usescroll = () => {
    const [scrolly, setscrolly] = useState();// 
    const [heightw, setheightw] = useState();
    const [offsetHeight, setoffsetHeight] = useState();
    const [results, setresults] = useState()
    
    const handleScroll =()=>{
       setscrolly( window.scrollY)//save e scrollY
      setheightw(window.innerHeight)//save height widow
     setoffsetHeight (document.body.offsetHeight);
     results((heightw -scrolly)>=offsetHeight)
       console.log(setscrolly)
    }
    useEffect(() => {
       window.addEventListener("scroll",handleScroll)//get scroll and save in my function  habdleScroll
        return () => {
            window.removeEventListener("scroll", handleScroll) //remove event no render action
        }
    }, [])
    
   return scrolly
  
}

export default usescroll
