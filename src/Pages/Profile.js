import React,{useState} from "react";

import { Outlet } from "react-router-dom";

import ProfileSideBar from "../Component/profileSideBar";

import { Backdrop,CircularProgress } from "@mui/material";



export default function Profile(){
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
          <ProfileSideBar />
          < Outlet />
        </article>
        </section>
        </>
    )
}

