import passport from "passport";
import {encryptPassword} from '../lib/helpers.js';
import {pool} from '../database.js'

export const renderSignUp=(req,res)=>res.render("auth/signUp");

export const signUp=async (req,res,next)=>{
    const {fullname,email,password1}=req.body;
    const password=await encryptPassword(password1);

    //saving in the database
    const [result]=await pool.query("insert into users set ?",{
       fullname,
       email,
       password
    })

    req.login(
        {
        id:result.insertId,
        fullname,
        email,
    },
    (err)=>{
        if(err){
            return next(err)
        }
        return res.redirect("/links"); 
    }
    )
}



export const renderSignIn=(req,res,next)=>res.render("auth/signin")
export const signIn=passport.authenticate("local.signin",{
    successRedirect:"/links",
    failureRedirect:"/signin",
    failureMessage:true,
    failureFlash:true,
})

export const logout=(req,res,next)=>{
    req.logout(function (err) {
        if(err)return next(err);
        res.redirect('/');
    })
}