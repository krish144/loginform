import React from "react";

import "../style/maindashboard.css"

import BasicTable from "./Table";

import Cards from "./Cards"

export default function MainDash(){
    return (<div className="mainDash">
         <h1>Dashbord</h1>  
          <Cards />
          <h2>New Records</h2>
          <BasicTable />
    </div>)
}