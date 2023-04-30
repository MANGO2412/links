export const isLoggedIn=(req,res,next)=>{
    if(!req.isAuthenticated())return res.redirect("/signing");
    return next();
}

export const isNotLoggedIn=(req,res,next)=>{
    if(req.isAuthenticated())return res.redirect("/links");
    return next();
}