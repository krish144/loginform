import React from "react";

import { UpdateDatas } from "../Data/data";

export default function Updates(){
    return (<div className="updates">
        {UpdateDatas.map((item,index)=>{
            return (<div className="update">
                <div className="update-img">
                 <img src={item.img} alt={item.name} />
                </div>
                <div className="update-details">
                 <p><b>{item.name}</b>{item.noti}
                 </p>
                 <div className="time">{item.time}</div>
                </div>
            </div>)
        })}
    
    </div>)
} 