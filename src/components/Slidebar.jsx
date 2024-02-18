import React , { useState} from 'react';

import {FaTh,FaBars,FaUserAlt,FaRegChartBar,FaCommentAlt,FaShoppingBag,FaThList} from "react-icons/fa";
import { NavLink } from 'react-router-dom';


 const Slidebar = ({children}) => {
    const [isOpen, setIsOpen]= useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem= [
        {
            path: "/dashboard",
            name: "Dashboard",
            icon: <FaTh/>
        },
        {
            path: "/about",
            name: "About",
            icon: <FaUserAlt/>
        },
        {
            path: "/analytics",
            name: "Analytics",
            icon: <FaRegChartBar/>
        },
        {
            path: "/comment",
            name: "Comment",
            icon: <FaCommentAlt/>
        },
        
        {
            path: "/product",
            name: "Product",
            icon: <FaShoppingBag/>
        },
        {
            path: "/productlist",
            name: "ProductList",
            icon: <FaThList/>
        },
    ]
  return (
    <div className='container'>
        <div style={{width: isOpen ? "300px" : "60px"}} className="slidebar">
            <div className="top_section">
                <h1  style={{display: isOpen? "block" : "none"}} className='logo'>Logo</h1>
                <div style={{marginLeft: isOpen ? "50px" : "0px"}}  className="bars">
                    <FaBars onClick={toggle}/>
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                    <NavLink to={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div  style={{display: isOpen ? "block" : "none"}} className="link_test">{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
        <main>{children}</main>
    </div>
  )
}
export default Slidebar;
