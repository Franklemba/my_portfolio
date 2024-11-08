const express = require("express");
const router = express.Router();
const fs = require('fs');
const Client = require("../models/clientsSchema.js");


const COUNTER_FILE = 'visitor_count.txt';

// Initialize counter if file doesn't exist
if (!fs.existsSync(COUNTER_FILE)) {
    fs.writeFileSync(COUNTER_FILE, '0');
}


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

  
  try {
    // Read current count
    const comments = await Client.find();
    let count = parseInt(fs.readFileSync(COUNTER_FILE));
    count++;

    console.log('We have a total of ' + count + 'interactions');

    fs.writeFileSync(COUNTER_FILE, count.toString());

    res.render("home/home",{
      items,
      comments
    })

  } catch (error) {
      res.status(500).json({ error: 'Failed to update visitor count' });
  }

    
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




router.get("/comments", async (req,res) => {

  
  try {
    // Read current count
    const comments = await Client.find();
    let count = parseInt(fs.readFileSync(COUNTER_FILE));
   

    res.render("home/comments",{
      comments,
      count
    })

  } catch (error) {
      res.status(500).json({ error: 'Failed to update visitor count or error displaying comments' });
  }

    
})



module.exports = router;