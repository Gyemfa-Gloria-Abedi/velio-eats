import React, {useState, MouseEvent} from 'react';
import { FaTwitter, FaFacebookSquare, FaWhatsapp} from "react-icons/fa";

const ContactusFooter = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const handleMessageSubmission = (e:MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    const inputVar = {
      name, email, message
    }
    console.log(inputVar);
    
  };

  const handleCancelSubmission = (e:MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault();
    setName("");
    setEmail("");
    setMessage("")
  }

  return (
    <div className="flex flex-col">
      <h2 className="mx-auto font-bold text-2xl border-b-2 border-amber-600">Contact Us</h2>
      <div className='flex justify-between mt-8'>
        <div>
          <p>Email Address: <span></span></p>
          <p className='my-2 '>Phone Number: <span></span></p>
          <div className='flex gap-6'>
            <FaTwitter />
            <FaFacebookSquare />
            <FaWhatsapp/>
          </div>
        </div>
        <div className='w-2/4 flex flex-col border-2 border-amber-600 p-4'>
          <h2 className='mx-auto text-lg font-medium leading-10'>Contact us via mail</h2>
          <form className='flex flex-col gap-4 mt-2'>
            <input placeholder='Name...' className='border p-2 rounded' value={name} onChange={(e)=>setName(e.target.value)} type="name"/>
            <input placeholder='Email...' className='border my-2 p-2 rounded' value={email} onChange={(e)=>setEmail(e.target.value)} type="email"/>
            <textarea placeholder='Enter your message' className='border p-2 rounded' value={message} onChange={(e)=>setMessage(e.target.value)} ></textarea>
            <div className='flex justify-between'>
              <button className='text-amber-600' onClick={handleCancelSubmission}>Cancel</button>
              <button className="border-2 border-amber-600 bg-amber-600 py-1 px-4 rounded font-semibold mt-4 text-white" onClick={handleMessageSubmission}>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactusFooter
