import {pool} from '../database.js'

export const renderIndex=(req,res)=> res.render("index");
export const ping=async(req,res)=>{
    const [result]=await pool.query('select 1+1 As result');
    res.json(result[0])
}
