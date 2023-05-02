
import  dashBord from "../assets/estate.svg"

import orders from "../assets/clipboard-alt.svg"

import clipboard from "../assets/clipboard-alt1.svg"

import customers from "../assets/users-alt.svg"

import product from "../assets/package.svg"

import analytics from "../assets/chart.svg"

import usdcash from "../assets/usd-square.svg"

import cashwithdraw from "../assets/money-withdrawal.svg"

import img1 from "../assets/img1.png"

import img2 from "../assets/img2.png"

import img3 from "../assets/img3.png"

export const sideBarData=[
    {
     image:dashBord,
     name:"Dashbord",
     path:"/admin/"
    },
    {
      image:orders,
      name:"Orders", 
      path:"/admin/orders"
    }, 
    {
     image:customers,
     name:"Customers",
     path:"/admin/customers"
   },
   {
     image:product,
     name:"Product",
     path:"/admin/products"
  
   },
   {
     image:analytics,
     name:"Analytics",  
     path:"/admin/analytics"
  
   }
];

export const profileSideBar=[{
   image:dashBord,
   name:"Dashbord",
   path:"/profile/"
  },
  {
    image:orders,
    name:"Orders", 
    path:"/profile/orders"
  }, {
   image:product,
   name:"Product",
   path:"/profile/products"

 }
];

export const CardsData=[
    {
     title:"Sales",
     color:{
        backGround:"linear-gradient(180deg,#bb67ff 0%,#c484f3 100%)",
        boxShadow:"0px 10px 20px 0px #e0c6f5",
     },
     barValue:70,
     value:"25,970", 
     png:usdcash,
     series:[{
        name:"Sales",
        data: [31,40,28,51,42,109,100]
     }]
    }
    ,{
        title:"Revenue",
        color:{
           backGround:"linear-gradient(180deg,#ff919d 0%,#fc929d 100%)",
           boxShadow:"0px 10px 20px 0px #fdc0c7",
        },
        barValue:80,
        value:"14,270", 
        png:cashwithdraw,
        series:[{
           name:"Revenue",
           data: [10,100,50,70,80,30,40]
        }]
    },
    {
        title:"Expenses",
        color:{
           backGround:"linear-gradient(rgb(248,212,154) -146.42%, rgb(255,202,113) -46.42%)",
           boxShadow:"0px 10px 20px 0px #f9d59b",
        },
        barValue:60,
        value:"4,270", 
        png:clipboard,
        series:[{
           name:"Expenses",
           data: [10,25,15,30,12,15,20]
        }]

    }]

   export const UpdateDatas=[
           {img:img1,
            name:"Andrew Thomas",
            noti:"has ordered Apple smart watch 2500mh battery.",
            time:"25 seconds ago"
          }, 
          {img:img2,
            name:"James Bond",
            noti:"has recived Smasung gadget for charging battery.",
            time:"30 minute ago"
          }, 
          {img:img3,
            name:"Iron Man",
            noti:"has ordered Apple smart watch 2500mh battery.",
            time:"2 hour ago"
          }
   ] 