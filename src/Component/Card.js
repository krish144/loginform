import React,{useState} from "react";

import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

import Close from "../assets/multiply.svg"

import Chart from "react-apexcharts";

import { AnimateSharedLayout ,AnimatePresence,motion} from "framer-motion";

function Card(props){
    const [expanded,setExpanded]=useState(false);
    return ( 
    
           <motion.AnimatePresence layoutId='expandableCard' >
            {
               expanded ? 
               (<ExpandedCard props={props} setExpanded={()=>setExpanded(false)}/> ):
               (<CompactCard props={props} setExpanded={()=>setExpanded(true)}/>) 
              }
            </motion.AnimatePresence>
            )
}


function CompactCard({props,setExpanded}){

  return (
  <motion.div className="CompactCard"
         style={{background:props.color.backGround,
               boxShadow:props.color.boxShadow}}
        onClick={setExpanded}
        
    >    
    <div className="radialBar">
     <CircularProgressbar value={props.barValue} text={`${props.barValue}%`} />
     <span>{props.title}</span>
    </div>
    <div className="detail">
    <img src={props.png} className="card-img" />
    <span>${props.value}</span>
    <span>Last 24 hours</span>
    </div>
    </motion.div>)
}

function ExpandedCard({props,setExpanded}){
    const data={
          options:{
            chart:{
                type:"area",
                height:"auto",
            },
            dropShadow: {
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blur: 3,
                color: '#000',
                opacity: 0.35
            },
            fill:{
             colors:["#fff"],
             type:"gradient",
            },
            dataLabels:{
               enabled:false,
            },
            stroke:{
                curve:"smooth",
                colors:["white"],
            },
            tooltip:{
               x:{
                formate:"dd/MM/yy HH/mm"
               },
            },
            grid:{
                show:true,
            },
            xaxis: {
                type:"datetime",
                categories:[
                    "2018-09-19T00:00:00.000Z",
                    "2018-09-19T01:30:00.000Z",
                    "2018-09-19T02:30:00.000Z",
                    "2018-09-19T03:30:00.000Z",
                    "2018-09-19T04:30:00.000Z",
                    "2018-09-19T05:30:00.000Z",
                    "2018-09-19T06:30:00.000Z",
                ],
            }
          }
    }
    return(  <motion.div className="Expanded"
    style={{background:props.color.backGround,
            boxShadow:props.color.boxShadow}}
         > 
<div style={{alignSelf:"flex-end",cursor:"pointer"}}>
    <img src={Close}  className="close-btn"  onClick={setExpanded}/>
</div>
<span>{props.title}</span>
<div className="charContainer">
    <Chart series={props.series} type="area" width="200%" options={data.options}/>
</div>
<span>Last 24 hours</span>
</motion.div>)
}


export default Card;

