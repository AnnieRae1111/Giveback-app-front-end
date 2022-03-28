import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'

const RequireAuth = () => {
    const { auth } = useAuth()
    const location = useLocation()

    return (
        auth?.user 
            ? <Outlet/>
            //only if we have a user will it show the outlet components 
            : <Navigate to="/signin" state={{ from: location}} replace/>
            //otherwise Navigate to signin from the location they came from 
    )

}

export default RequireAuth
