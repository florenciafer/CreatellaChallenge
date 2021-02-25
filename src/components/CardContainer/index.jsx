import React from 'react';
import Card from "../Card/index";


const CardContainer = ({cards}) => {
  return(
<div>
       {cards.map((card)=>{
           return (
   
                 <div className="card-map">
                 <Card face={card.face} key={card.id} price={card.price} date={card.date} size={card.size}></Card>
                 </div>
 
             
           )
       })}
   </div>
  )
  
 
}

export default CardContainer