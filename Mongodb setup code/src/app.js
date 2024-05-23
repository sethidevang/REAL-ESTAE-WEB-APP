import express from "express";
const app = express();
import cors from "cors"
import connectDB from "./db/connectDb.js";
import dotenv from "dotenv"
dotenv.config();
import { User } from "./model/user.js";
const PORT = process.env.PORT || 3000; 

app.use(cors({
    origin: "*"
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))


connectDB().then(() =>{
    app.listen(PORT, () => console.log("Running on port number: ", PORT));
}).catch(() => {
    console.log("Error in connectDB function")
})



app.post("/register", async (req, res) => {
    const {name, email, password} = await req.body;
  
    // name, email, password
    if(!name || !email || !password) {
        return res.json({message: "user all field is required", success: false});
    }
    const alreadyExistedEmail = await User.findOne({email});
    if(alreadyExistedEmail) 
        return res.json({message: "already existed"});
    const newUser = await User.create({
        name, email, password
    }) 
    return res.json({message: "new user registered succesfully", success: true, data: newUser})
})

app.post("/login", async (req, res) => {
   try {
    
     const {email, password} = req.body;
     
     if(!email || !password) 
        return res.json({message: "email and password both req", success: false});
     const user = await User.findOne({email});
     if(!user) return res.json({message: "user with this credentail not found", success: false});
     if(user.password !== password)
         return res.json({message: "incorrect password", success: false});
     return res.json({message: "user logged in succesfully", success: true, data: user});
   } catch (error) {
    console.log("Error in login function", error)
    return res.json({message: "Error in loginfunction"})
   }
})

app.get("/",(req, res) => {
    return res.json({message: "this is home route second", success: true})
})