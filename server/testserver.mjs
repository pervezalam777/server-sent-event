import express from "express";


const app = express();

app.get("/", (req, res) => res.json({ "message": "hello" }));

app.listen(5001, () => console.log("Hello ESM with @std/esm !!"));