import React from "react";

import Updates from "./Update";

import CustomerReview from "./CustomerReview";

import "../style/rightSideBar.css"

export default function RightSide(){
    return(
        <div className="RightSiderBar">
        <div>
            <h3>Updates</h3>
            <Updates />
        </div>
        <div>
            <h3>Customer Review</h3>
            <CustomerReview />
        </div>
        </div>
    )
} 





