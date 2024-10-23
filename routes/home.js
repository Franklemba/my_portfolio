const express = require("express");
const router = express.Router();




const items = [
    { slug: 'item-1', status: 1 },
    { slug: 'item-2', status: 1 },
    { slug: 'item-3', status: 1 },
    { slug: 'item-4', status: 1 } ,
    { slug: 'item-5', status: 1 },
    { slug: 'item-6', status: 1 },
    { slug: 'item-7', status: 1 },
    { slug: 'item-8', status: 1 },
  
  ];



router.get("/", (req,res) => {

    res.render("home/home",{
      items
    })
})


module.exports = router;