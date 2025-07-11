export default {
    db: {
        username:process.env.DB_USERNAME,
        password:process.env.DB_PASSWORD,
        host:process.env.DB_HOST,
        port: process.env.DB_PORT,
        database:process.env.DB_NAME,
        dialect:process.env.DIALECT,
    },
    server: {
        port: process.env.PORT || 3000,
    },
};