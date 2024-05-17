import express from "express" ;
import dotenv from 'dotenv';
import cors from 'cors';
import passport from "passport";
import session from "express-session";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import './passport/github.auth.js'

import userRoutes from "./routes/user.routes.js"
import exploreRoutes from "./routes/explore.routes.js"
import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000 ;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// const _dirname = path.resolve();
console.log("_dirname", __dirname);

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

dotenv.config() ; 

// app.get("/home" ,(req, res)=> {
//     res.send("server is ready");
// })

app.use("/api/auth" , authRoutes);
app.use("/api/users" , userRoutes);
app.use("/api/explore" , exploreRoutes);

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
});

app.listen(PORT, ()=>{
    console.log(`Server started on http://localhost:${PORT}`);
    connectMongoDB()
});

