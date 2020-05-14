import express from 'express';
import { getCountries } from '../db/index.mjs';

const adminRouter = express.Router();

adminRouter.get('/countries', (req, res) => {
    res.json(getCountries());
})

export default adminRouter;