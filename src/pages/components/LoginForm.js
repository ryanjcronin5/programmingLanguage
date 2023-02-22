import * as React from 'react'
import { useState } from 'react'

function Form() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "mail@gmail.com",
            password: "abc123"
        },
        {
            username: "ryan@gmail.com",
            password: "hello"
        }
    ];

    const errors = {
        email: "invalid username",
        psw: "invalid password"
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            alert(`${errorMessages.message}`)
        );
        
    const handleSubmit = (event) => {
        event.preventDefault();

        var { email, psw } = document.forms[0];

        const userData = database.find((user) => user.username === email.value);


        if (userData) {
            if (userData.password !== psw.value) {
                setErrorMessages({ name: "password", message: errors.password });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "username", message: errors.username });
        };

    };

    const [email, setEmail] = useState("");
    const [psw, setPSW] = useState("");

    return (
        <div id='form' className='flex w-full h-screen flex-col md:flex-row gap-5 items-start justify-center text-white relative'>
            <div className='md:3/6'>
                <div className='flex flex-col w-full min-w-96 pt-32 items-start'>
                    <div className="w-full p-6 m-auto bg-gray-400 rounded-md shadow-md lg:max-w-xl">
                        <h1 className="text-4xl font-semibold text-center text-white underline">Sign in</h1>
                        <form className="mt-6" onSubmit={handleSubmit}>
                            <div className="mb-2">
                                <label 
                                    for="email" 
                                    className="block text-md font-semibold text-gray-800">
                                        Email
                                </label>
                                <input 
                                    type="email" 
                                    value={email} 
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    required/>
                                {renderErrorMessage("email")}
                            </div>
                            <div className="mb-2">
                                <label 
                                    for="password" 
                                    className="block text-md font-semibold text-gray-800">
                                        Password
                                </label>
                                <input 
                                    type="password" 
                                    value={psw}
                                    name="psw"
                                    onChange={(e) => setPSW(e.target.value)}
                                    className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                    required/>
                                    {renderErrorMessage("psw")}
                            </div>
                            <a href="#" className="text-xs text-purple-600 hover:underline line-through">Forget Password?</a>
                            <div className="mt-6">
                                <input type={'submit'} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600" />
                                {isSubmitted ? <div className='mt-6'>Form has been submitted</div> : Form}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Form;