const db = require(`mongoose`);

try {
    db.connect('mongodb://127.0.0.1:27017/testAPI')
    console.log(`Database running on: mongodb://127.0.0.1:27017/testAPI`)    
} catch (e) {
    throw e.event;
}

exports.module = db;