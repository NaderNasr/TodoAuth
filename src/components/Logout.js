import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from 'react-bootstrap';


const LogOutButton = () => {
    const{logout}=useAuth0()
    return (
        <Button variant="danger" onClick={()=>logout()} style={{marginRight: '20px', color:'white', fontWeight: 'bold'}}>
            Sign Out
        </Button>
    )
}

export default LogOutButton
