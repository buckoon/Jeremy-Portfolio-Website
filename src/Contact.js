import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import { useForm } from "react-hook-form";


function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = Data => {
    window.location.href = `mailto:jeremydeveloper1689@gmail.com?subject=${Data.subject}&body= Hi, my name is ${Data.name}. ${Data.message}`;
  };
  
  return (
    <div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact</h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
          Thanks for stopping by.{" "}
          <span className="decoration-[#0A81F7]/50 underline">Feel free to reach out.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EmailIcon className="text-[#FF8C00] h-7 w-7 animate-pulse" />
            <p className="text-2xl">jeremydeveloper1689@gmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex space-x-2">
            <input {...register("name")} placeholder="Name" className="contactInput" type="text" />
            <input {...register("email")} placeholder="Email" className="contactInput" type="email" />
          </div>

          <input {...register("subject")} placeholder="Subject" className="contactInput" type="text" />

          <textarea {...register("message")} placeholder="Message" className="contactInput" />
          <button type="submit" className="bg-[#0A81F7] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
        </form>

        
      </div>
      
    </div>
  );
}

export default Contact;
