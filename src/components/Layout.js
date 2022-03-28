import { Outlet } from "react-router-dom";

//this component allows us to wrap routes and apply protected routes 

const Layout = () => {
    return ( 
        <div className="app-container">
            <Outlet/>

        </div>
      );
}
 
export default Layout;