import dotenv from 'dotenv';
dotenv.config();
export default{
    MONGODB_URL: process.env.MONGODB_URL,
    EMAIL: process.env.EMAIL,
    PASSWORD: process.env.PASSWORD,
    JWT_SECRET: process.env.JWT_SECRET,
    // PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID,
};