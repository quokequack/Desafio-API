import express, { Request, Response } from "express";
import employeeRoutes from "./src/routes/employeeRoutes";

const app = express();
const PORT = process.env.PORT || 8080;

app.use('/api', employeeRoutes)


app.listen(PORT, () => {
    console.info("SUCK IT FUCKERS " + PORT);
})