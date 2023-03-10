const express = require("express");
const app = express();
const port = 3100;

const { check, validationResult } = require("express-validator");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Express routes
const showRouter = require("./routes/shows");
const userRouter = require("./routes/users");

app.use("/shows", showRouter);
app.use("/users", userRouter);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});
