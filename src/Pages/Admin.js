import React,{useState} from "react"

import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';


import SideBar from "../Component/SideBar";

import { Backdrop,CircularProgress } from "@mui/material";



import "../style/admin.css"


export default function Admin() {
    
    const [open, setOpen] = useState(true);
    setTimeout(() => {
        setOpen(false);
    }, 2000);
    return (<>
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
        <section className="background">
            <article className="backgroundGlass">
                <SideBar />
                <Outlet />
            </article>
        </section>
    </>)
}