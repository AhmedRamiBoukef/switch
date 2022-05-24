import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Image from '../images/forgotpasswordback.jpg'

const ForgotPassword = () => {
    const [Email, setEmail] = useState({ email: "" });

    const hanleClick = () => {
        if (Email.email != "") {
            fetch('http://localhost:5000/api/forgetPassword', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(Email)
            })
                .then(res => res.json())
                .then(data => console.log(data));
        }
        else {
            console.log("Erreur!! entrer votre email svp")
        }
    }

    const hanleMotDePasseOublié = (e) => {
        const { name, value } = e.target;
        setEmail(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div className="font-sans antialiased text-gray-600 flex flex-col relative min-h-screen">
            <div className="relative z-10 flex-auto flex items-center justify-center text-sm text-center text-gray-600 py-16 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md ">

                    <h1 className="text-center mb-2 text-gray-900 text-4xl font-semibold">Mot de passe oublié</h1>
                    <p className="text-center text-lg mb-10">Entrez votre email et nous allons vous envoyez un nouveau sur votre boite email.</p>

                    <form>
                        <div className="relative">
                            <label htmlFor="email-address" className="not-sr-only">adresse email</label>
                            <input id="email-address" x-ref="email" name="email" type="email" required autoFocus className="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-xl focus:border-teal-500 focus:ring-teal-500 focus:outline-none" placeholder="Adresse email" onChange={hanleMotDePasseOublié} />
                        </div>

                        <button type="submit" className="block w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-xl mt-4 hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50" onClick={hanleClick}>
                            réinitialiser mon mot de passe
                        </button>
                    </form>
                </div>
            </div>

            <footer className="relative z-10 flex-none text-sm text-center py-4 px-4 sm:px-6 lg:px-8 " >
                    <div className="text-gray-900 sm:flex sm:items-center sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Link to="/Login" >
                            <div className="rounded-md border border-gray-300 hover:border-gray-400 py-2 px-10 font-medium flex items-center justify-center">
                                Aller à Login
                                <svg aria-hidden="true" width="11" height="10" fill="none" className="flex-none ml-1.5">
                                    <path d="M5.977 9.639L10.616 5 5.977.362l-.895.89L8.19 4.353H.384v1.292H8.19L5.082 8.754l.895.885z" fill="currentColor" />
                                </svg>
                            </div>
                        </Link>
                    </div>
            </footer>

            <img src={Image} alt="" className="absolute bottom-0 right-0 w-full " />
        </div>
    )
}

export default ForgotPassword
