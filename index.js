import {router} from "./src/routes/routes";
import express from "express"
import bodyParser from "body-parser";
const app = express();

const port = process.env.PORT || 4000;
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(session({secret:"fd34s@!@dfa453f3DF#$D&W",resave:false,saveUninitialized:true}))

app.listen(port,() => {
    console.log(port)
})