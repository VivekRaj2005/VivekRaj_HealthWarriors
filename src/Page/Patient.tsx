import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"

function Patient(user: {user: any}) {

    const navigate = useNavigate();
    useEffect(() => {
      if(!user.user) {
        navigate("/")
      }
    }, [])
    
  return (
    <Outlet context={user}/>
  )
}

export default Patient