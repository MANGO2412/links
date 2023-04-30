import {pool} from '../database.js'

export const renderAddLink= (req,res)=>res.render("links/add");

export const addLink=async (req,res)=>{
    const {title,url,description}=req.body;
    await pool.query("INSERT INTO links set ?",[
        {
            title,
            url,
            description,
            user_id:req.user.id
        }
    ]);
   
    req.flash('success',"Link saved succefully")
    res.redirect("/links");
}

export const  renderLinks=async(req,res)=>{
    const [row]=await pool.query("select * from links where user_id=?",req.user.id);
    res.render("links/list",{links:row})
}


export const renderEditLink=async(req,res)=>{
    const [row]=await pool.query("select * from links where id=?",req.params.id);
    res.render('links/edit',{links:row[0]})
}

export const editLink=async(req,res)=>{
    const {id}=req.params;
    const {title,url,description}=req.body;
    const newLink={
        title,
        url,
        description
    }
    await pool.query("update links set ? where id=?",[ newLink,id]);
    req.flash("success","link updated successfully")
    res.redirect('/links');
}

export const deleteLink=async(req,res)=>{
    await pool.query('delete  from links where id=?',req.params.id);
    req.flash("success","Link removed successfully");
    res.redirect('/links');
}