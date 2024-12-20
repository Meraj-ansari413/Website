import React from "react";
import { useForm } from "react-hook-form"
import axios from "axios";
import toast from "react-hot-toast";
function Contact(){
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
     } = useForm();
      const onSubmit = async(data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            message:data.message
        }
        try{
          await  axios.post("https://getform.io/f/amddxxwb",userInfo);
          toast.success("Your message has been sent");
        } catch (errors){
            console.log(errors);
            toast.errors("something went wrong");
        }
    }

    return(
        <>
        <div name="Contact"className="max-w-screen-2xl container mx-auto px-4 md:px-20 ">
            <h1 className="text-3xl font-bold mb-4">Contact me</h1>
            <span>Please fill out the form below to contact me</span>
            <div className="flex flex-col items-center justify-center mt-5">
                <form 
                onSubmit={handleSubmit(onSubmit)}
               // action="https://getform.io/f/amddxxwb" method="POST" 
                className="bg-slate-200 w-96 px-8 py-6 rounded-xl">
                    <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
                    <div className="flex flex-col mb-4">
                        <label className="block text-gray-700">Full Name</label>
                        <input className="shadow rounded-lg appearence-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline"
                        {...register("name", { required: true })} 
                        id="name"
                        name="name"
                        type="text"
                        placeholder=" Enter Your Name"/>
                      {errors.name && <span>This field is required</span>}
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="block text-gray-700">Enter Your Email Address</label>
                        <input className="shadow rounded-lg appearence-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline"
                         {...register("email", { required: true })} 
                        id="name"
                        name="email"
                        type="text"
                        placeholder=" Enter Your email Address"/>
                        {errors.email && <span>This field is required</span>}
                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="block text-gray-700">Message</label>
                        <textarea className="shadow rounded-lg appearence-none border  py-2 px-3 text-gray-700 leading-tight focus:outline-none  focus:shadow-outline"
                          {...register("message", { required: true })} 
                        id="name"
                        name="message"
                        type="text"
                        placeholder=" Enter Your Query"/>
                         {errors.message && <span>This field is required</span>}
                    </div>
                    <button  type="submit"className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">Send</button>
                </form>
            </div>
        </div>
        </>
    )
}
export default Contact;