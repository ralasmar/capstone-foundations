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
        drop table if exists albums;
        drop table if exists artists;
        drop table if exists users;
        drop table if exists AUTH;
        drop table if exists reviews;

        CREATE TABLE users(
            user_id SERIAL PRIMARY KEY,
            username VARCHAR(100),
            first_name VARCHAR(100),
            last_name VARCHAR(100)
        );

         CREATE TABLE artists(
            artist_id SERIAL PRIMARY KEY,
            name VARCHAR(100)
        );

        CREATE TABLE albums (
            album_id SERIAL PRIMARY KEY,
            name VARCHAR(100),
            album_img TEXT,
            artist_id INTEGER REFERENCES artists(artist_id)
        );
        

        CREATE TABLE AUTH(
            auth_id SERIAL PRIMARY KEY,
            user_id INTEGER REFERENCES users(user_id),
            password VARCHAR(100)
        );

        CREATE TABLE reviews(
            review_id SERIAL PRIMARY KEY,
            album_id INTEGER REFERENCES albums(album_id),
            user_id INTEGER REFERENCES users(user_id),
            body TEXT
        );



        INSERT INTO users(username, first_name, last_name)
        VALUES
            ('ralasmar', 'Rola', 'Alasmar);

        
        INSERT INTO AUTH(user_id, password)
        VALUES
            (1, 'password');

        INSERT INTO artists(name)
        VALUES
            ('Indigo De Souza'),
            ('Boygenius'),
            ('Janelle Monae'),
            ('Alvaays'),
            ('The 1975');
        
        INSERT INTO albums(name, album_img, artist_id)
        VALUES
            ('All of This Will End', 'https://cdn.shopify.com/s/files/1/1285/7955/products/LBJ-354_1024RGB_72dpi_1024x.jpg?v=1671478618', 1),
            ('The Record', 'https://snworksceo.imgix.net/rce/f54e32b0-72ae-40ce-99ff-95f0252ec3ba.sized-1000x1000.jpg?w=1000', 2),
            ('Dirty Computer', 'https://wordpress.wbur.org/wp-content/uploads/2018/05/0501_janelle-monae-dirty-computer-1000x1000.jpg', 3),
            ('Blue Rev', 'https://f4.bcbits.com/img/a0736922991_10.jpg', 4),
            ('Being Funny in a Foreign Language', 'https://f4.bcbits.com/img/a0736922991_10.jpg', 5);

       


        INSERT INTO reviews(album_id, user_id, body)
        VALUES(1, 1, 'This album rules');
       
    `)
        .then(() => {
            console.log('DB seeded')
            res.sendStatus(200)
        }) .catch(err => console.log('error seeding DB', err))
    }
}