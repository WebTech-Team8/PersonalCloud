import express from "express";
import dotenv from "dotenv";
import setupDatabase from "./src/data/database";

startServer();

async function startServer() {
    dotenv.config();

    const app = express();

    app.use(express.json());

    app.get("/", (req, res) => {
        console.log("Working!");

        res.status(200).send("server is ok");
    })

    app.get("/forbidden", (req, res) => {
        res.status(403).send("FORBIDDEN!")
    });

    const dbMessage = await setupDatabase();
    console.log(dbMessage);

    app.listen(process.env.PORT, () => {
        console.log(`Server listening on port ${process.env.PORT}...`)
    });
}