const db = require(`./index.js`);
const { Schema } = db;
db.model(`User`, new Schema({
    username: String,
    password: String
}));