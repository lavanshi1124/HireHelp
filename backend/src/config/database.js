const mongoose = require('mongoose');

async function connectToDB(){
    if (mongoose.connection.readyState === 1) {
        return mongoose.connection;
    }

    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
        console.warn('MONGO_URI is not set. Database connection skipped.');
        return null;
    }

    try {
        await mongoose.connect(mongoUri, { serverSelectionTimeoutMS: 5000 });
        console.log('Connected to Database');
        return mongoose.connection;
    }
    catch(err){
        console.error('Database connection failed:', err.message);
        return null;
    }
}

module.exports = connectToDB;