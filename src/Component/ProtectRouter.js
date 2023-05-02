import React from "react";

import { Outlet } from "react-router-dom";

import Login from "../Pages/Login";

const ProtectRouter=(props)=>{
    return props.status.check?<Outlet />:<Login />;
}

export default ProtectRouter;

