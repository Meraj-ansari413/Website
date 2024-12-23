import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from "react-scroll";
import pic from "../../public/myimage.jpeg";
function Navbar(){
    const [menu,setmenu]=useState(false)
    const NavItems=[
        {
            id:1,
            text:"Home"
        },
        {
            id:2,
            text:"About"
        },
        {
            id:3,
            text:"Portfolio"
        },
        {
            id:4,
            text:"Experience"
        } ,
        {
            id:5,
            text:"Contact"
        } 
    ]
    return (
        <>
    
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
            <div className="flex justify-between item-center h-16">
                <div className="flex space-x-2">
                    <img src={pic} className="h-12 w-12 rounded-full"alt=""></img>
                    <h1 className="font-semibold text-xl cursor-pointer">Meraj <span className="text-green-500 text-2xl">Ansari</span>
                    <p>Web Developer</p>
                    </h1>
                </div>
                <div>
                    {/*desktop navbar*/}
                <ul className="hidden md:flex space-x-8 ">
                    {
                        NavItems.map(({id,text})=>(
                            <li className="hover:scale-105 duration-200 font-semibold cursor-pointer" key={id}>
                                <Link to={text}
                                smooth={true}
                                duration={500}
                                offset={-70}
                                activeClass="active">
                                {text}
                                </Link>
                               </li>
                        ))
                    }
                </ul>
              <div onClick={()=>setmenu(!menu)} className="md:hidden">
                 {menu?<IoCloseSharp size={24}/>:<MdMenu  size={24}/>}</div>
                </div>   
                </div> 
            {/*mobile navbar*/}
               {
                menu &&(
                    <div className="bg-white">
                    <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
                    {
                        NavItems.map(({id,text})=>(
                            <li className="hover:scale-105 duration-200 cursor-pointer" key={id}>
                            <Link 
                             onClick={()=>setmenu(!menu)}
                            to={text}
                            smooth={true}
                            duration={500}
                            offset={-70}
                            activeClass="active">
                            {text}
                            </Link></li>
                        ))
                    }
                        </ul>
                    </div>
                )
               }
           
        </div>

        </>
    )
}
export default Navbar;