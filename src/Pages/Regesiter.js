import React,{ useState,useEffect,useRef } from "react";

import {Link} from "react-router-dom"

import { useForm } from 'react-hook-form';

import {useNavigate} from "react-router-dom"

import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function Regesiter(props){


    
    const { register, handleSubmit ,watch,formState :{errors} }=useForm();
    

   
    
    const history=useNavigate()

        const onSubmit=(e)=>{
         
            let regObj=e;

            fetch("http://localhost:8000/user",{
                method:"POST",
                headers:{"content-type" : "application/json"},
                body:JSON.stringify(regObj)
            }).then((res)=>{
                console.log("Successfully Regsiter...");
                history("/registered")
            }).catch((err)=>{
                console.log("Failed !");
            })

        }

    return(
            <>
            <section className="login-form">
        <h1>Sign Up</h1>
         
         <form onSubmit={handleSubmit(onSubmit)} >
            <label>User Name:</label>
            <input 
                {...register("id", { required: true, maxLength: 20 })}
                   autoComplete="off"
                   /> 
                   
                {errors?.id?.type=== "required" && <p className="warning"><WarningAmberIcon/>This Feild is required</p> }
                {errors?.id?.type=== "maxLength" && <p className="warning"><WarningAmberIcon/>Name cannot exceed 20 characters</p> }
                
            <label>Email:</label>
            <input 
                {...register("email",{required:true,pattern:/^\S+@\S+$/i})}
                autoComplete="off"
            /> 
                
                 {errors?.email?.type=== "required" && <p className="warning"><WarningAmberIcon/>This Feild is required</p> }
                 {errors?.email?.type=== "pattern" && <p className="warning"><WarningAmberIcon/>Please Enter the Valid Email ID.</p>}
                 
            <label>Password:</label>
            <input 
                type="password"
                {...register("password",{required:true,minLength : 8,pattern: /[$&+,:;=?@#|'<>.-^*()%!]/})}
                autoComplete="off"
                    /> 
                    
                 {errors?.password?.type=== "required" && <p className="warning"><WarningAmberIcon/>This Feild is required</p> }
                 {errors?.password?.type=== "minLength" && <p className="warning"><WarningAmberIcon/>Use 8 characters or more for your password</p> }
                 {errors?.password?.type=== "pattern" && <p className="warning"><WarningAmberIcon/>Use any special character</p> }
                 
                 

                  

             <button type="submit">Sign Up</button>
         </form>
          
          <Link to="/" id="register" >Already have an Account ? Login here.</Link>
          
        </section>
    </>)
}