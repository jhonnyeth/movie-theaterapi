const express = require("express");
const app = express();
const port = 3000;

const { check, validationResult } = require("express-validator");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Express routes
const showRouter = require("./routes/Shows");
const userRouter = require("./routes/Users");

app.use("/shows", showRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
