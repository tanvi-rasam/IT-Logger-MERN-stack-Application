const express= require('express');
const router= express.Router();
const Log = require('../models/Logs');


// get logs
router.get('/',async (req,res)=>{
    try {
        const logs=await Log.find().sort({date:-1})
        res.json(logs)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error');
    }
})

//delete logs
router.delete('/:id',async (req,res)=>{
    try {
        let log= await Log.findById(req.params.id);

        if(!log) {return res.status(404).json({msg:'Log not Found'});}

        await Log.findByIdAndRemove(req.params.id);
        
        res.json({msg:'Contact Removed'});

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error');
    }
})

//add logs
router.post('/',async (req,res)=>{
    const {message, attention, tech}= req.body;
   
    try {
        let log=new Log({
            message,
            attention,
            tech
        });

        await log.save();
        res.json(log);
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error');
    }
})

//update log
router.put('/:id',async (req,res)=>{
    //const {message, attention, tech}= req.body;
    try {
        let log= await Log.findById(req.params.id);

        if(!log) {return res.status(404).json({msg:'Log not Found'});}

        log= await Log.findByIdAndUpdate(req.params.id,
            {$set:req.body},
            {new:true});
        
        res.json(log);

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error');
    }
})

module.exports = router;