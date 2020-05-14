import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import adminRouter from './admin/index.mjs'
import establishConnection from './connect/index.mjs'

const app = express();

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    console.log('request received...')
    res.json({message:'Hi there'})
});

app.get('/connect', establishConnection);
app.use('/admin', adminRouter);

//TODO check issue with port 6000
const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})