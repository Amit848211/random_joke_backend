// // Import required modules
const express = require("express");

require("dotenv").config();
const request = require("request");

const app = express();
const PORT = parseInt(process.env.PORT);
console.log(process.env.PORT, process.env.API_KEY, PORT);
// Define a route to fetch a random image
app.get("/api/joke/random", async (req, res) => {
  try {
    var limit = 1;
    request.get(
      {
        url: "https://api.api-ninjas.com/v1/jokes?limit=" + limit,
        headers: {
          "X-Api-Key": "fXXsWE08i979zEEnOwNCWg==S6e064pUdgrTp8Nh",
        },
      },
      function (error, response, body) {
        if (error) return console.error("Request failed:", error);
        else if (response.statusCode != 200)
          return console.error(
            "Error:",
            response.statusCode,
            body.toString("utf8")
          );
        else{
            console.log(body);
            res.send(
              body
            )
            
        } 
      }
    );
  } catch (error) {
    // Handle errors
    console.error("Error fetching random image:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
