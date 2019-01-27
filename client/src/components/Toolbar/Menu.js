import React, {Fragment} from "react";
import { SideNav, SideNavItem,} from  "react-materialize";
import 'materialize-css/dist/css/materialize.min.css';


const Menu = () => {
 return (
   <Fragment>
     <SideNav
       trigger={
         <button>
           <img src={require("../../images/menu.png")} alt="hamburgerIcon"/>
         </button>
       }
       options={{ closeOnClick: true }}
     >
     <img src={require("../../images/user.png")} alt="user"/>
       <SideNavItem
         userView
         user={{
           background: "",

           name: "John Doe",
           email: "jdandturk@gmail.com"
         }}
       />
       <SideNavItem href="#!icon">First Link</SideNavItem>
       <SideNavItem href="#!second">Second Link</SideNavItem>
       <SideNavItem waves href="#!third">Third Link</SideNavItem>
     </SideNav>
   </Fragment>
 );
};
export default Menu;