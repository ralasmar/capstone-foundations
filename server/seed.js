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
            INSERT INTO reviews(album_id, body)
            VALUES
                (1, 'This album rules!'),
                (1, 'I was not a fan'),
                (2, 'Amazing album, every track was great'),
                (2, 'So good, addicted to this album!'),
                (3, 'Wow! loved every second'),
                (3, 'I was a bit disappointed tbh'),
                (4, 'First time hearing this band, obsessed!'),
                (4, 'Loved it, such beautiful writing'),
                (5, 'My favorite album from them so far!'),
                (5, 'It was kind of meh, in my opinion'),
                (6, 'They never miss, best band in the world!'),
                (6, 'All i can say is incredible!'),
                (7, 'This album describes all my feelings perfectly! I am addicted'),
                (7, 'Didn not love it on first listen, but it has been growing on me!'),
                (8, 'This might be my favorite album of all time! Cant stop listening'),
                (8, 'Found it boring just cant get into her'),
                (9, 'Her best work yet, every track is an emotional ride!'),
                (9, 'wow, immediately in love upon first listen'),
                (10, 'Beautiful beautiful album! couldnt have asked for better'),
                (10, 'Really great highs, but some lows. Would be better if she cut some of the more boring tracks.'),
                (11, 'a classic'),
                (11, 'Never could see the appeal in them, honestly'),
                (12, 'She is gonna be a star, so good!'),
                (12, 'Best album i have heard in awhile! So impressed!'),
                (13, 'A great second album from her'),
                (13, 'I am officially obsessed with her!');
                  

    `)
        .then(() => {
            console.log('DB seeded')
            res.sendStatus(200)
        }) .catch(err => console.log('error seeding DB', err))
    }
}