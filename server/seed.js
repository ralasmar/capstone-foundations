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
        drop table if exists reviews;

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

        CREATE TABLE reviews(
            review_id SERIAL PRIMARY KEY,
            album_id INTEGER REFERENCES albums(album_id),
            body TEXT
        );
    
        INSERT INTO artists(name)
        VALUES
            ('Indigo De Souza'),
            ('Boygenius'),
            ('Janelle Monae'),
            ('Alvaays'),
            ('The 1975'),
            ('MUNA'),
            ('Taylor Swift'),
            ('The Beatles'),
            ('LORDE')
            ;
        
        INSERT INTO albums(name, album_img, artist_id)
        VALUES
            ('All of This Will End', 'https://cdn.shopify.com/s/files/1/1285/7955/products/LBJ-354_1024RGB_72dpi_1024x.jpg?v=1671478618', 1),

            ('The Record', 'https://snworksceo.imgix.net/rce/f54e32b0-72ae-40ce-99ff-95f0252ec3ba.sized-1000x1000.jpg?w=1000', 2),

            ('Dirty Computer', 'https://wordpress.wbur.org/wp-content/uploads/2018/05/0501_janelle-monae-dirty-computer-1000x1000.jpg', 3),

            ('Blue Rev', 'https://f4.bcbits.com/img/a0736922991_10.jpg', 4),

            ('Being Funny in a Foreign Language', 'https://f4.bcbits.com/img/a0736922991_10.jpg', 5),

            ('MUNA', 'https://upload.wikimedia.org/wikipedia/en/2/28/Muna_2022_album.jpeg', 6),

            ('Saves The World', 'https://recordstoreday.com/Photo/418461454444:300', 6),

            ('Fearless', 'https://people.com/thmb/UaCCRVkd8nuJQYXWc4UTYUkPGFs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(1109x674:1111x676)/taylor-swift-b2da7a6ca64744cd9ea0b35bdbe1e2cc.jpg', 7),

            ('Speak Now', 'https://static.wikia.nocookie.net/taylor-swift/images/8/8f/Taylor_Swift_-_Speak_Now_cover.png/revision/latest?cb=20220327092303', 7),

            ('Red', 'https://www.usatoday.com/gcdn/presto/2021/11/10/USAT/cc05201a-9a43-424a-b005-012ad7b79bae-TS_Red_Cover.jpg', 7 ),

            ('Abbey Road', 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg', 8),

            ('Pure Heroine', 'https://upload.wikimedia.org/wikipedia/commons/f/fe/Lorde_Pure_Heroine.png', 9 ),
            
            ('Melodrama', 'https://assets.vogue.com/photos/58b9984461606a75f44032fa/master/w_716,h_715,c_limit/00-square-lorde-album-art.jpg', 9)

            ;
       

    `)
        .then(() => {
            console.log('DB seeded')
            res.sendStatus(200)
        }) .catch(err => console.log('error seeding DB', err))
    }
}