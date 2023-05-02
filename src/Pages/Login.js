import {useState,useRef,useEffect,useContext} from "react"

import {useNavigate} from "react-router-dom"

import {useForm} from "react-hook-form"

import { Link } from "react-router-dom";

import { TextField } from "@mui/material";

import API from "./API";

import WarningAmberIcon from '@mui/icons-material/WarningAmber';

export default function Login(props){

    const { register, handleSubmit ,watch,formState :{errors} }=useForm();

    const [correct,setCorrect]=useState(true);

    const [result,setResult]=useEffect({})

    const history=useNavigate();

    useEffect(() => {
    fetchData();
    }, [])


     function fetchData(){
        const url="http://localhost:8000/user";

         fetch(url)
       .then(response=>setResult(response.json()))
         .then(error=> console.log(error))
     }
    


        const onSumit=(e)=>{
            fetch( "http://localhost:8000/user/" +e.userName).then((res)=>{
                return res.json();
            }).then((resp)=>{
                if(Object.keys(resp).length === 0){
                   setCorrect(false);
                }
                else{
                    if(e.password=="admin.150"){
                      
                    
                            history("/admin");
                            props.status.check=true;
                       
                    }
                    else if(resp.password==e.password){
                        history("/profile")
                        props.status.check=true;
                    }                   
                    else{
                        setCorrect(false);
                    }
                }
            }).catch((err)=>{
                console.log("Server Not Respond.");
            })
        }
    return(
        <>
        <section className="login-form">

        
        <API dataObject={result}/>

        <h1>Log in</h1>
     
     <form onSubmit={handleSubmit(onSumit)}>
        {/* <label>User Name:</label>
        <input 
           {...register("userName",{required:true,maxLength: 20 })}
           autoComplete="off"
            />  */}

            

            <TextField id="outlined-basic" label="Name" variant="standard"  inputProps={{ style: { color: "red" } }} {...register("userName",{required:true,maxLength: 20 })} className="input"
           autoComplete="off" />
            
                {errors?.userName?.type=== "required" && <p className="warning"><WarningAmberIcon/>This Feild is required</p> }
                {errors?.userName?.type=== "maxLength" && <p className="warning"><WarningAmberIcon/>Name cannot exceed 20 characters</p> }
                
        {/* <label htmlFor="password">Password:</label>
        <input 
             type="password"
             {...register("password",{required:true ,minLength : 8 ,pattern: /[$&+,:;=?@#|'<>.-^*()%!]/ })}
             autoComplete="off"
            />  */}

         <TextField id="outlined-basic" label="Password" type="password" variant="standard"
             {...register("password",{required:true ,minLength : 8 ,pattern: /[$&+,:;=?@#|'<>.-^*()%!]/ })} className="input"
           autoComplete="off" />


            
                 {errors?.password?.type=== "required" && <p className="warning"><WarningAmberIcon/>This Feild is required</p> }
                 {errors?.password?.type=== "minLength" && <p className="warning"><WarningAmberIcon/>Use 8 characters or more for your password</p> }
                 {errors?.password?.type=== "pattern" && <p className="warning"><WarningAmberIcon/>Use any special character</p> }
                 
            {!correct && <p id="errMsg"><WarningAmberIcon/>User Not Found</p>}
          
          <button type="submit">Login</button> 
          </form>
      
    <Link to="/register" id="register" >Don't have an Account ? SignUp here. </Link>
      
    </section>
</>)
}
