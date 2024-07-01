"use client"

import { useState } from "react";
import axios from "axios";



export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const handleNameChange = (event:any) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event:any) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event:any) => {
    setPhone(event.target.value);
  };

  const handleDescripChange = (event:any) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async () => {
   
   
    setName("");
    setEmail("");
    setPhone("");
    setDescription("");
    alert("Form submitted successfully!");
     const response = await axios.post(`/api/user`, {
          name: name,
          email: email,
          phone: phone,
          description: description
      });
     
     
     


    
   };
   

  return (
    <div className="m-2">
      <div className="grad lg:text-4xl text-2xl  mb-8">Contact Me:</div>
      <div>
        <form>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Name
              </label>
              <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                value={name}
                onChange={handleNameChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="abc@email.com"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone number
              </label>
              <input
                type="text"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="94162*****"
                value={phone}
                onChange={handlePhoneChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Description
              </label>
              <input
                type="text"
                id="website"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Anything"
                value={description}
                onChange={handleDescripChange}
                required
              />
            </div>
          </div>
          <button
            type="button"
            onClick={handleSubmit}
            className="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-1xl px-5 py-2.5 text-center me-2 mb-2 w-32"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
}
