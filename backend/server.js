import express from "express" ;
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from "./routes/user.routes.js"
import exploreRoutes from "./routes/explore.routes.js"

const app = express();
app.use(cors());

dotenv.config() ;

let port = 5000 ; 

app.listen(port, ()=>{
    console.log("Server started on: ",port);
});

app.use("/api/users" , userRoutes);
app.use("/api/explore" , exploreRoutes);

app.get("/home" ,(req, res)=> {
    res.send("server is ready");
})