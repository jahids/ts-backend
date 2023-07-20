import express from "express";
import 'dotenv/config'
import noteRoute from "./routes/note.route"
import cors from 'cors';
const app = express();

app.use(cors())
app.use(express.json())
app.use("/api/notes", noteRoute)

app.use((req, res, next)=>{
  next (Error("endpoint not found"))
})



export default app;






