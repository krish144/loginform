import React,{useState} from "react";

import {Link} from "react-router-dom";

import logo from "../assets/logo.png"

import MenuBar from "../assets/bars.svg"

import "../style/sidebar.css"

import { profileSideBar } from "../Data/data";

import signOut from "../assets/sign-out-alt.svg"

export default function ProfileSideBar(){

    const [selected,setSelected]=useState(0);

    const [expanded,setExpanded]=useState(false);

    return <div className="sideBar" style={expanded ? {left:'0px'} : {left:'-250px'} }>

        <div className="logo">
            <img src={logo} alt="logo"/>
            <span>Sh<span>o</span>ps</span>
        </div>
        <img src={MenuBar} className="menubar" alt="menubar" style={expanded ? {left:"100%"} : {left:"110%"} } onClick={()=>setExpanded(prev=>!prev)} />
        <div className="menu">
            {profileSideBar.map((item,index)=>{
                return (
                    <Link to={item.path} className={selected==index ? "menu-item active" : "menu-item"} key={index} 
                    onClick={()=>setSelected(index)}>
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                    </Link>
                )
            })
            }
            <Link to="/" title="Log Out">
            <div className="menu-item" id="log-out">
             <img src={signOut} alt="signout" />
            </div>
            </Link>
        </div> 
    </div>
}