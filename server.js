 
  // Loads express
  const express = require("express");
  // get data
  

  // create an instance of express
  const app = express();
  const PORT = 3000;

   //Greeting route
  
    app.get("/greeting", (req, res) => {
      res.send('Hello, stranger')
    });


    app.get('/greeting/:name', (req, res) => {
          
      res.send(`What's up  ${req.params.name} ?`)
  })


    // App Listener
  app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });