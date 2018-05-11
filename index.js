import {router} from "./src/routes/routes";
import express from "express"
import bodyParser from "body-parser";
const app = express();

const port = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.listen(port,() => {
    console.log(port)
})