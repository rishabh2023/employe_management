import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import EmployeDisplay from '../home/employe/EmployeDisplay';
import "./style/login.css"

export default function Login() {
    const [data,setdata] = useState({});

    const navigate = useNavigate();


    const onSubmitForm = (event) => { 
        event.preventDefault();
        if (data.email === "admin@admin.com" && data.password === "1234"){
            localStorage.setItem('isloggedIn',true)
            localStorage.setItem('isadmin',true)
            localStorage.setItem('status','admin')
            navigate('/')
        }else if (data.email === "employe@gmail.com" && data.password === '1234'){
            localStorage.setItem('isloggedIn',true)
            localStorage.setItem('isadmin',false)
            localStorage.setItem('status','emp')
            navigate('/')
        }
        console.log(data);

    }

  return (
    <>
        <div className="container">
            <div className="row">
                <div className="">
                    <div className="">
                        <h2 className="text-center">Login</h2>
                        <form onSubmit={onSubmitForm}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" className="form-control" name="email" onChange={(e)=> {
                                    setdata({...data, email: e.target.value})
                                }} />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" onChange={(e)=>{
                                    setdata({...data, password: e.target.value})
                                }}/>
                            </div>
                            <div className="form-group">
                                <button type="submit" className="submit-btn">Login</button>
                            </div>
             
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>
  )
}
