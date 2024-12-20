import React from "react";
import html from "../../public/html.png"
import javascript from "../../public/javascript.png"
import css from "../../public/css.png"
import bootstrap from "../../public/bootstrap.png"
import oracle from "../../public/oracle.png"
import java from "../../public/java.png"
import cpp from "../../public/cpp.png"
import c from "../../public/c.png"
function Experience(){
    const CardItems=[
        {
        id:1,
        logo:html,
        name:"HTML"
        },
        {
            id:2,
            logo:css,
            name:"CSS"
            },
            {
                id:3,
                logo:javascript,
                name:"Javascript"
            },
            {
                id:4,
                logo:bootstrap,
                name:"Bootstrap"
                },
                {
                    id:5,
                    logo:oracle,
                    name:"MySql"
                    },
                    {
                        id:6,
                        logo:java,
                        name:"Java"
                        },
                        {
                            id:7,
                            logo:cpp,
                            name:"C++"
                            },
                            {
                                id:8,
                                logo:c,
                                name:"C"
                                },
    ]
    return(
        <>
         <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
            <div>
                <h1 className="text-3xl font-bold mb-5">Experience</h1>
                <p className=" ">I' ve more than 1 years of experience in below technologies</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-7 my-3 ">
                    {
                        CardItems.map(({id,logo,name})=>(
                            <div className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[250px] md:h-[250px] shadow-md  p-1 cursor-pointer hover:scale-110 duration-300" key={id}>
                                <img src={logo} alt="" className="w-[150px]  rounded-full"/>
                                <div>
                                    <div >{name}</div>
                                   
                                </div>
                               
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
        </>
    )
}
export default Experience;