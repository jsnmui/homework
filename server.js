 
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

  //Tip Calculator
  
   app.get('/tips/:total/:tipPercentage', (req, res) => {
      
    let tip = req.params.total * req.params.tipPercentage/100
      res.send(`Tip is  ${tip} dollars.`)
  })
  // magic 8 ball
  app.get('/magic/:question', (req, res) => {
    
    let response = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
      let responseNum =  Math.floor(Math.random()*response.length)
    

     res.send(`<h1>${req.params.question} ? ${response[responseNum]}</h1>`)
  })





    // App Listener
  app.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });