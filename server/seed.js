require('dotenv').config()
const Sequelize = require('sequelize')
const { CONNECTION_STRING } = process.env

//initialize new Sequelize instance passing connection string and object
const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
})

module.exports = {
    seed: (req,res) => {
        sequelize.query(`
        CREATE TABLE albums (
            album_id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            album_img TEXT,
            artist_id INTEGER REFERENCES artists(artist_id)
        );
        
        CREATE TABLE artists(
            artist_id SERIAL PRIMARY KEY,
            name VARCHAR(100),
        );
        
        CREATE TABLE users(
            user_id SERIAL PRIMARY KEY,
            username VARCHAR(100),
            first_name VARCHAR(100),
            last_name VARCHAR(100)
        );

        CREATE TABLE AUTH(
            auth_id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(user_id),
            username VARCHAR(100),
            password VARCHAR(100)
        );

        CREATE TABLE reviews(
            review_id SERIAL PRIMARY KEY,
            album_id FOREIGN KEY,
            user_id INTEGER REFERENCES users(user_id),
            body TEXT
        );

        INSERT INTO albums(name, album_img)
        VALUES
            ('All of This Will End', 'https://cdn.shopify.com/s/files/1/1285/7955/products/LBJ-354_1024RGB_72dpi_1024x.jpg?v=1671478618');

    `)
        .then(() => {
            console.log('DB seeded')
            res.sendStatus(200)
        }) .catch(err => console.log('error seeding DB', err))
    }
}