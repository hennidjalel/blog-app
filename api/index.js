import  express  from "express";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"
import cors from "cors"
import * as dotenv from 'dotenv';


dotenv.config();


const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)
app.use('/api/posts', postRoutes)


app.use(cors({ origin: process.env.CLIENT_URL }));

app.listen(8000, ()=>{
    console.log("connect to db")
})