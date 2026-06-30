import express, { type Application, type Request, type Response } from "express"
import {Pool} from "pg"
import { initDB } from "./database/database";
import config from "./config/env";

const app : Application = express();
const port = config.port;

app.use(express.json());

export const pool = new Pool({
    connectionString : config.connection_string
})


initDB();


app.get('/', (req:Request, res:Response) => {
  res.status(200).json({
    "message" : "Express server initialized."
  });
  
});

app.post('/', async (req:Request, res:Response) => {

    const {name, email, password, role} = req.body;

    const result = await pool.query(`
            INSERT INTO users(name, email, password , role) VALUES($1, $2, $3, $4)
            RETURNING *
        `,[name, email, password, role])
    // console.log(req.body);
    
    res.status(201).json({
        success : true,
        message : "data retrived successfully",
        data : {name, email, role},
    })
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})