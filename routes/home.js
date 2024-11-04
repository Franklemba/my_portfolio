const express = require("express");
const router = express.Router();
const Client = require("../models/clientsSchema.js");



const items = [
    { slug: 'item-1', status: 1 },
    { slug: 'item-2', status: 1 },
    { slug: 'item-3', status: 1 },
    { slug: 'item-4', status: 1 },
    { slug: 'item-5', status: 1 },
    { slug: 'item-6', status: 0 },
    { slug: 'item-7', status: 1 },
    { slug: 'item-8', status: 1 },
];



router.get("/", async (req,res) => {

  const comments = await Client.find();

    res.render("home/home",{
      items,
      comments
    })
})


router.post("/form", async (req,res) => {

   const {name, email, message } = req.body;

   console.log(req.body);
   try {
     
        const client = new Client({name, email, message})
     
        await client.save();
        res.redirect('/');
    
   } catch (error) {

      console.log(error);
      res.send(error.message);

   }
  
});


module.exports = router;