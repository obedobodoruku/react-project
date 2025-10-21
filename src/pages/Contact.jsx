import React, { useState } from 'react';

const Contact = () => {
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
    const [phoneInput, setPhoneInput] = useState("");
    const [contentInput, setContentInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        setNameInput("");
        setEmailInput("");
        setPhoneInput("");
        setContentInput("");

        window.alert("Form submitted successfully!");
    };

    return (
        <div>
            <h1 className="text-center text-white text-5xl font-bold mt-[70px]">Contact Us!</h1>

            <div className="form-group flex flex-col items-center justify-center mt-[100px]">
                <form className="w-full text-white">
                    <fieldset className="border-2 border-blue-500 p-5 rounded-[20px]">
                        <legend className='text-5xl font-bold'>Hello There!</legend>
                        <div>
                            <label>
                                Name:
                                <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} className="border-b-2 border-b-white p-2 w-full" id="name" type="text" placeholder='e.g Obed Oboodruku' required/>
                            </label>
                            
                        </div>

                        <div>
                            <label>
                                Email:
                                <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} className="border-b-2 border-b-white p-2 w-full" type="email" placeholder='e.g obedobodoruku@gmail.com' required/>
                            </label>
                        </div>

                        <div>
                            <label>
                                Phone Number:
                                <input value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} className="border-b-2 border-b-white p-2 w-full" type="tel" required/>
                            </label>
                        </div>

                        <div>
                            <label>
                                Content(optional):
                                <textarea value={contentInput} onChange={(e) => setContentInput(e.target.value)} className="border-b-2 border-b-white mt-4 p-2 w-full" placeholder='Your message here...'></textarea>
                            </label>
                            
                            <div className='flex flex-col items-center justify-center'>
                                <button className='w-[200px] bg-blue-500 p-2 rounded-[20px] text-white' onClick={handleSubmit} type="button">
                                    Submit
                                </button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
};

export default Contact;