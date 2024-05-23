import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

import Footer from './Footer';
import Nav from './Nav';
import axios from 'axios';
const Login = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("Requested...");
            const formData = new FormData();
            formData.append("email", email);
            formData.append("password", password);
            const data = {email, password};
            const response = await axios.post("http://localhost:3000/login", data);
            console.log(response);
            if(!response.data.success) {
                alert(response.data.message);
                return;
            }
            alert("User logged in successfully");
            navigate("/");
        } catch (error) {
            console.log("Error in handle submit function", error);
        }
    }
    return (
        <>
            <Nav />
            <section className="form-container">

                <form onSubmit={handleSubmit}>
                    <h3>welcome back!</h3>
                    <input type="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required maxLength="50" placeholder="enter your email" class="box" />
                    <input type="password" name="pass" value={password} onChange={(e)=>setpassword(e.target.value)} required maxLength="20" placeholder="enter your password" class="box" />
                    <p>don't have an account? <Link to="/register">register new</Link></p>
                    <div  ><button type='submit' className="btn" >LogIn</button></div>
                </form>

            </section>

            {/* <div><button className='btn'>Request</button></div> */}

            <Footer/>



        </>
    )
}

export default Login
