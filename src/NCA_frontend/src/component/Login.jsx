import React from "react"
import { useState } from 'react';

import Header from './Header.jsx'
import Input from './LogRegInput.jsx'
import Footer from './Footer.jsx'

import '../style/LogRegInput.css'

function Login(){
    document.title = "Login Page | NCA";

    // DB Purpose
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [button, setButton] = useState();

    return(
        <>
            <Header/>

            <div className="form-container">
                <form className='logReg-form-container'>
                    <Input inputType={"title"} title={"LOGIN"}/>
                    <Input value={email} setValue={setEmail} inputType={"email"} title={"Email"} description={"Provide Your Personal Email"} imgName={"formEmail.png"} placeholder={"sigma@gmail.com"}/>
                    <Input value={password} setValue={setPassword} inputType={"password"} title={"Password"} description={"Provide Your Password"} imgName={"formPassword.png"} placeholder={"password"}/>
                    <Input inputType={"link"} title={"/NCA/register"} description={"New to NCA? Create Your Account"}/>
                    <Input inputType={"button"} title={"LOGIN"}/>
                </form>
            </div>

            <Footer/>
        </>
    );
}

export default Login;