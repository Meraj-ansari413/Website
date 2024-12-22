import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareGithub } from "react-icons/fa6";

import pic from "../../public/myimage.jpeg";

import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";

import { ReactTyped,Typed } from "react-typed";
function Home(){
    return (
        <>
        <div  name="Home"className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
            <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 mt-12 md:mt-24  space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
           <div className="flex space-x-1 text-2xl md:text-4xl">
           <h1>Hello ,I'm a</h1>
          {/* <span className="text-red-700 font-bold">Developer</span>*/}
          <ReactTyped
          className="text-red-700 font-bold"
          strings={["Developer","Programmer","Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
           </div>
           <br/>
            <p className="text-sm md:text-md text-justify">"Hello! I’m Meraj Ansari, a passionate and dedicated frontend developer with a strong foundation in HTML, CSS, JavaScript, Bootstrap, and ReactJS. Currently pursuing my Bachelor of Computer Applications (BCA) at Veer Bahadur Singh Purvanchal University Jaunpur , I specialize in creating modern, responsive, and user-friendly web applications. I enjoy problem-solving, learning new technologies, and crafting designs that bring ideas to life. Outside of coding, I love playing cricket, exploring tech innovations, and enhancing my skills to stay ahead in this dynamic field."

</p>
            <br/>
            {/*social media icon*/}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
            <div className="space-y-2">
            <h1 className="font-bold ">Availble On </h1>
            <ul className="flex space-x-5">
                <li>
                    <a href="https://www.facebook.com/">
                    <FaFacebookSquare className="text-2xl cursor-pointer" />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com">
                    <FaLinkedin className="text-2xl cursor-pointer"/>
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/">
                    <IoLogoYoutube className="text-2xl cursor-pointer"/>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/">
                    <FaSquareGithub className="text-2xl cursor-pointer"/>
                    </a>
                </li>
            </ul>
            </div>
            <div className="space-y-2">
            <h1 className="font-bold"> Currently Working On </h1>
            <div className="flex space-x-5">
            <DiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
            <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
            <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
            <FaNode className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]"/>
            </div>
            
            </div>
            </div>
            </div>
            <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img src={pic}
             className="rounded-full  md:w-[450px] md:h-[450px]"
            alt=""
            />
            </div>
            </div>
        </div>
        <hr/>
        </>
    );
}
export default Home;