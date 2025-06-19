const express = require('express');
const connectDB = require('./db');
const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());
const port = 3000;
const users = require('./routes/AllProduct')

app.get('/', (req, res) => {
    res.send('Hello World!')

});

connectDB();

app.use('/api', users)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})