import React from "react"; 

import Card from "./Card"

import { CardsData } from "../Data/data";

export default function Cards(){ 
    return<div className="cards">
      {CardsData.map((card,index)=>{
         return (
          <div className="parentContainer">
           <Card 
           title={card.title}
           color={card.color}
           barValue={card.barValue}
           value={card.value}
           png={card.png}
           key={index}
           series={card.series}
           />
           
          </div>
        ) })}
        
      </div>
   

}
