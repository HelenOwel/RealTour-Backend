import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./Routes/routes.js";
import bodyParser from "body-parser";
const app = express();


//middleware

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Db connection
mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://helenowel6:rzEvm67gzOSMle6t@cluster0.5lgmo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB connected"))
  .catch((err) => console.log("DB Connection Error", err));

app.use("/api", routes);



const port = 9000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

