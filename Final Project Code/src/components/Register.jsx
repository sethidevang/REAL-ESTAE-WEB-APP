import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Nav from './Nav'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if(password !== confirmPassword) {
                alert("Password and confirm password must be same");
                return;
            }
            console.log("Requested...");
            
            const data = {name,email, password};
            const response = await axios.post("https://real-estae-web-app-1.onrender.com/register", data);
           
            if(!response.data.success) {
                alert(response.data.message);
                return;
            }
            alert("User registered successfully successfully");
            alert("Redirecting to the login page");
            navigate("/login");
        } catch (error) {
            console.log("Error in handle submit function", error);
        }
    }
    return (
        <>
            <Nav />
            <section class="form-container">
                <form onSubmit={handleSubmit}>
                    <h3>create an account!</h3>
                    <input type="name" name="name" onChange={(e) => setName(e.target.value)} required maxlength="50" placeholder="enter your name" class="box" />
                    <input type="email" name="email" onChange={(e) => setEmail(e.target.value)} required maxlength="50" placeholder="enter your email" class="box" />
                    <input type="password" name="pass" onChange={(e) => setPassword(e.target.value)} required maxlength="20" placeholder="enter your password" class="box" />
                    <input type="password" name="c_pass" onChange={(e) => setConfirmPassword(e.target.value)} required maxlength="20" placeholder="confirm your password" class="box" />
                    <p>already have an account? <Link to="/login">login now</Link></p>
                    <button type='submit' className='btn'>Register Now</button>
                </form>
            </section>

            <Footer />

        </>
    )
}

export default Register
