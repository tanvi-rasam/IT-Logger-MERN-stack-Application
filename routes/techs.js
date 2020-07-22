const express= require('express');
const router= express.Router();
const Tech = require('../models/Tech');



// get techs
router.get('/',async (req,res)=>{
    try {
        const tech=await Tech.find()
        res.json(tech)
    } catch (error) {
        res.status(500).send('Server Error');
    }
})

//delete techs
router.delete('/:id', async (req,res)=>{
    try {
        let tech= await Tech.findById(req.params.id);

        if(!tech) {return res.status(404).json({msg:'Tech not Found'});}

        await Tech.findByIdAndRemove(req.params.id);
        
        res.json({msg:'Contact Removed'});

    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error');
    }
})


//add techs
router.post('/',async (req,res)=>{
    const {firstName, lastName}= req.body;
   
    try {
        let tech=new Tech({
            firstName,
            lastName
        });

        await tech.save();
        res.send("Tech saved");
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error');
    }
})

module.exports = router;