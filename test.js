// Import dependencies
const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve a simple HTML page
app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Fullstack Practice</title>
      </head>
      <body>
        <h1>Hello from Fullstack Practice!</h1>
        <form method="POST" action="/hello">
          <input type="text" name="name" placeholder="Enter your name" />
          <button type="submit">Say Hello</button>
        </form>
      </body>
    </html>
  `);
});

// Handle form submission
app.post("/hello", (req, res) => {
  const name = req.body.name || "Stranger";
  res.send(`<h2>Hello, ${name}!</h2><a href="/">Go Back</a>`);
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
