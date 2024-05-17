import express from "express" ;
import dotenv from 'dotenv';
import cors from 'cors';
import passport from "passport";
import session from "express-session";

import './passport/github.auth.js'

import userRoutes from "./routes/user.routes.js"
import exploreRoutes from "./routes/explore.routes.js"
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectMongodb.js";

const app = express();

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

dotenv.config() ;

let port = 5000 ; 

app.get("/home" ,(req, res)=> {
    res.send("server is ready");
})

app.use("/api/auth" , authRoutes);
app.use("/api/users" , userRoutes);
app.use("/api/explore" , exploreRoutes);

app.listen(port, ()=>{
    console.log("Server started on: ",port);
    connectMongoDB()
});

