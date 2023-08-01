import { Router } from "express";


const router = Router();

router.get("/", (req,res)=>{
    try{
        res.send("Welcome to Travel-Blog-API");
    }
    catch(err){
        console.error();
    }
});


export default router;
