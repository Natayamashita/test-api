const express = require(`express`);
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log(`Express running on port: ` + port);
})

app.post(`/registerUser`, (req, res) => {
    console.log(res)
})