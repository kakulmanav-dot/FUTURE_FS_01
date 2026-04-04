import React, { useState } from 'react'
import ParticlesBackground from "../components/ParticlesBackground"
import emailjs from "@emailjs/browser"
import {motion }from "framer-motion"
import Astra from "../assets/Astra.png"
function Contact() {
  const service_ID = import.meta.env.VITE_SERVICE_ID
  const public_ID = import.meta.env.VITE_PUBLIC_ID
  const template_ID = import.meta.env.VITE_TEMPLATE_ID

  const [formData , setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [error,setError] =  useState({});
  const [status,setStatus] =  useState("");

  const handleChange = (e) =>{
     const{name,value} = e.target
     setFormData((p)=> ({...p , [name]: value}));
     if(error[name]){ setError((p)=> ({...p , [name]: ""}))}
  }
  const validateForm = () =>{
    const required = ["name" , "email" , "message"];
    const newErrors = {};
    required.forEach((f)=> !formData[f].trim() && (newErrors[f] = "Fill this field"))
       
    setError(newErrors);
    return !Object.keys(newErrors).length;
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    if(!validateForm())return;

    setStatus('Sending');

    try {
       await emailjs.send(
        service_ID,template_ID,{
          ...formData , from_name: formData.name,
          reply_to: formData.email

        },
        public_ID
       );
       setStatus("Success");
       setFormData({
        name: "",
        email: "",
        message: ""
       })
    } catch (error) {
       console.error("EMAILJS ERROR",error);
       setStatus('Error')
    }

  }
  return (
    <section
      id="contact"
      className="relative w-full min-h-screen  bg-black overflow-hidden
     text-white  py-20 px-6 md:px-20 flex flex-col md:flex-row items-center gap-10"
    >
      <ParticlesBackground />
      <div className="relative z-10  w-full flex flex-col md:flex-row  items-center gap-10">
        <motion.div
          className="w-1/2 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.img
            src={Astra}
            alt=""
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
        {/* -------right side--------- */}
        <motion.div
          className="w-full md:w-1/2 bg-white/5 p-8 rounded-2xl shadow-lg border border-white/10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-3xl mb-6">Contact Me</h2>
          <form>
            <div className="flex flex-col">
              <label htmlFor="">
                Your Name <span className="text-red-600 mb-1">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`border border-white/10 p-3 rounded-md ${error.name ? "border-red-500" : "border-gray-500"} text-white focus:outline:none focus:border-blue-500`}
              />
              {error.name && (
                <p className="text-red-500 text-xs">{error.name}</p>
              )}
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="">
                Your Email<span className="text-red-600 mb-1 ">*</span>
              </label>
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`border border-white/10 p-3 rounded-md ${error.email ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
              />
              {error.email && (
                <p className="text-red-500 text-xs">{error.email}</p>
              )}
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="">
                Message <span className="text-red-600 mb-1">*</span>
              </label>
              <textarea
                type="text"
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className={`border border-white/10 p-3 rounded-md ${error.message ? "border-red-500" : "border-gray-500"} text-white focus:outline-none focus:border-blue-500`}
              />
              {error.message && (
                <p className="text-red-500 text-xs">{error.message}</p>
              )}
            </div>
            {status && (
              <p
                className={`${status === "Error" ? "text-red-500" : "text-green-500"} mt-1 text-sm font-medium`}
              >
                {status === "Sending"
                  ? "Sending..."
                  : status === "Success"
                    ? "Message sent successfully✅"
                    : "Something went wrong❌"}
              </p>
            )}
            <div className='flex items-center justify-center'>
              <motion.button
                type="submit"
                onClick={handleSubmit}
                className="mt-4 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-xl py-3 px-4 w-100 rounded"
                whileHover={{scale: 1.05}}
                disabled={status === "Sending"}
              >Send Message</motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact