const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/version', (req, res, next) => {
    res.send( {version: `Current of node: ${process.version}`});
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
