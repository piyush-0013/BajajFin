const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const response = {
  is_success: true,
  user_id: "piyush2339.be21",
  email: "piyush2339.be21@chitkara.edu.in",
  roll_number: 2110992339,
  odd_numbers: [],
  even_numbers: [],
  alphabets: []
};

app.get("/", (req, res) => {
  return res.send("Hello!");
});


app.post("/bfhl", (req, res) => {
  for (let i = 0; i < req.body.data.length; i++) {
    if (typeof req.body.data[i] == "number") {
      if (req.body.data[i] % 2 == 0) {
        response.even_numbers.add(req.body.data[i]);
      } else {
        response.odd_numbers.add(req.body.data[i]);
      }
    } else if (typeof req.body.data[i] == "string") {
      response.alphabets.add(req.body.data[i]);
    }
  }

  return res.status(200).json(response);
});

app.listen(5000, () => {
  console.log("Server is started");
});
