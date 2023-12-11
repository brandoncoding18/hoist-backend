import express from "express";
import cors from "cors";
import Greeting from "./greeting.js";
import ProgramRoutes from "./programs/routes.js";
import UserRoutes from "./users/routes.js";
import "dotenv/config"; 
import mongoose from "mongoose";
import session from "express-session";
const CONNECTION_STRING = 'mongodb://127.0.0.1:27017/webproj'//process.env.DB_CONNECTION_STRING|| 
mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"//process.env.FRONTEND_URL

}));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };

  /*
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  */
  app.use(session(sessionOptions));
  
  
app.use(express.json());
Greeting(app);
UserRoutes(app);
ProgramRoutes(app);
app.listen(4000);