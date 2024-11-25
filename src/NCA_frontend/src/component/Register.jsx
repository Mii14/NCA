import { useState } from 'react';

import Header from './Header.jsx'
import Input from './LogRegInput.jsx'
import Footer from './Footer.jsx'

import '../style/LogRegInput.css'

function Register(){
    document.title = "Register Page | NCA";

    // DB Purpose
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [birthDate, setBirthDate] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [button, setButton] = useState(); 

    return(
        <>
            <Header/>

            <div className="form-container">
                <form className='logReg-form-container'>
                    <Input inputType={"title"} title={"REGISTRATION"}/>
                    <Input value={firstName} setValue={setFirstName} inputType={"text"} title={"First Name"} description={"Please Input Your First Name"} imgName={"formName.png"} placeholder={"First Name"}/>
                    <Input value={lastName} setValue={setLastName} inputType={"text"} title={"Last Name"} description={"Please Input Your Last Name"} imgName={"formName.png"} placeholder={"Last Name"}/>
                    <Input value={birthDate} setValue={setBirthDate} inputType={"date"} title={"Birth Date"} description={"Provide Your Birth Date"} imgName={"formCalendar.png"}/>
                    <Input value={email} setValue={setEmail} inputType={"email"} title={"Email"} description={"Provide Your Personal Email"} imgName={"formEmail.png"} placeholder={"sigma@gmail.com"}/>
                    <Input value={password} setValue={setPassword} inputType={"password"} title={"Password"} description={"Provide Your Password"} imgName={"formPassword.png"} placeholder={"password"}/>
                    <Input inputType={"link"} title={"/NCA/login"} description={"Already Have an Account?"}/>
                    <Input inputType={"checkbox"} description={"I Accept All The Terms and Requirements "}/>
                    <Input inputType={"button"} title={"REGISTER"}/>
                </form>
            </div>

            <Footer/>
        </>
    );
}

export default Register;