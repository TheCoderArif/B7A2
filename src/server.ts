import express, { type Application, type Request, type Response } from "express"
import {Pool} from "pg"
import { initDB } from "./database";

const app : Application = express();
const port = 5000;

app.use(express.json());

export const pool = new Pool({
    connectionString : "postgresql://neondb_owner:npg_zI6RPUlN2Jxv@ep-divine-sky-adnk6wto-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
})


initDB();


app.get('/', (req:Request, res:Response) => {
  res.status(200).json({
    "message" : "Express server initialized."
  });
  
});

app.post('/', async (req:Request, res:Response) => {
    // console.log(req.body);
    const {name, email} = req.body;
    res.status(201).json({
        success : true,
        message : "data retrived successfully",
        data : {name, email},
    })
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})