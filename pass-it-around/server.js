// Loads express
  const express = require("express");
  // get data
  

  // create an instance of express
  const app = express();
  const PORT = 3000;

   //Greeting route
  
    app.get("/", (req, res) => {
      res.send('99 Bottles of beer on the wall <br> <a href=/98>take one down, pass it around</a>')
      
    });


   app.get('/:number_of_bottles', (req, res) => {
      let link =''   
      let nextNum = req.params.number_of_bottles - 1
    
    if (req.params.number_of_bottles > 0 ) {
       link =  `<a href=/${nextNum}>take one down, pass it around</a>`
    } else {
       link =  `<a href=/>Start Over</a>`
    }

      res.send(`${req.params.number_of_bottles} bottles of beer on the wall.<br>${link}`)
    
    })


 



    // App Listener
  app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });