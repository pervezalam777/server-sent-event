import express from 'express';
import { getCountries } from '../db/index.mjs';
import { updateCountry, addCountry } from '../connect/index.mjs';

const adminRouter = express.Router();

adminRouter.get('/countries', (req, res) => {
    res.json(getCountries());
})

adminRouter.put('/country', (req, res) => {
    //update country
    let country = req.body;
    let result = updateCountry(country)
    if(result != true){
        res.status(400).send("bad request");
        return;
    }
    res.status(200).json({message: "successfully updated"})
})

adminRouter.post('/country', (req, res) => {
    //add country
    const result = addCountry(req.body)
    if(result != true){
        res.status(400).send("bad request");
        return;
    }
    res.status(200).json({message:"successfully added"})
})

export default adminRouter;