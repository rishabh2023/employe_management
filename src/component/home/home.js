import React from 'react'
import AdminTable from './admin/AdminTable'
import EmployeDisplay from './employe/EmployeDisplay'
import EmployeTable from './employe/employeTable'
import Navbar from './Navbar'

export default function Home() {

    if (localStorage.getItem('isloggedIn')){
        if (localStorage.getItem('status') === 'admin'){
            return (
                <>
                  <Navbar/>
                <AdminTable/>
                </>
            )
        }else{
            return (
                <>
                <Navbar/>
                <EmployeTable/>
                </>
            )
        }
    }else{
        return (
            <>
            <Navbar/>
            <h1>Please Login</h1>
            </>
        )

    }
  
    }

 
    
