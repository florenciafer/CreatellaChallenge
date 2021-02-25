import React from 'react'

const Card = ({face ,price,date,size}) => {
    const converterPrice =(value)=> {
        let price = value.toString();
        let pricelenght = price.length;
        let priceNew ="";
         if (pricelenght === 3){
          priceNew = "$"+price.slice(0,1)+","+price.slice(1);
         } else if(pricelenght ===2 ){
             priceNew= "$0,"+price
         }else {
             priceNew = "$0,0"+price
         }
         return priceNew
      }
      const converterDate =(value)=>{
       
          const  dateApi= new Date (value);// I turn the days into milliseconds 
         const dateToday = new Date(); 
          let results ; 
          const day_as_milliseconds = 86400000;// day as milliseconds
          const diff_in_millisenconds =dateApi - dateToday;
          //milli second difference between the two dates
          const diff_in_days = Math.ceil(Math.abs(diff_in_millisenconds /day_as_milliseconds))
          //difference mili seconds divided a day into milliseconds
          //I return the higher number and if it is negative I revert it to the opposite
          //returns the days difference between both 
         
          if(diff_in_days < 6){
              results= `eg. ${diff_in_days} ${diff_in_days === 1 ? "day ago" : "days ago "}` ;
          }else{
            results = ((dateToday.getDate() )) + "/" + ((dateToday.getMonth() + 1)) + "/" + dateToday.getFullYear();
           
          }
          return results
           
      }
   return (
        <div className="container-card">
            <div className="face" style={{ fontSize: size }}>{face}</div>
            <div className="price" ><span className="text">Price:</span>{converterPrice(price)}</div>
            <div className="date"><span className="text">Date:</span>{converterDate(date)}</div>
             
        </div>
    )
}

export default Card