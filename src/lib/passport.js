import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import {pool} from '../database.js'
import { matchPasword } from "./helpers.js";

passport.use(
    "local.signin",
     new LocalStrategy(
        {
            usernameField:"email",
            passwordField:"password",
            passReqToCallback:true
        }
        ,
       async(req,email,password,done)=>{
         const [rows]=await pool.query("select * from users where email=?",[email])

          if(!rows.length)
            return done(null,false,req.flash("error","Nouser found"));

          const user=rows[0];
          const validPassword=await matchPasword(password,user.password);
          if(!validPassword){
              req.flash("error","Incorrect password")
              return done(null,false)
          }

          done(null,user);
      }
     )
);

passport.serializeUser((user,done)=>{
    done(null,user.id)
})

passport.deserializeUser(async(id,done)=>{
    const [rows]=await pool.query("select * from users where id= ?",[id])
    done(null,rows[0])
})