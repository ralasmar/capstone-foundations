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

const userDatabase = []
let id = 0

module.exports = {
    getArtists: (req,res) => {
        sequelize.query(`
        SELECT *
        FROM albums
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch(err => console.log(err))        
    },

    createAlbum: (req,res) => {
        const { name, album_img, artist_id } = req.body
        sequelize.query(`
            INSERT INTO albums(name, album_img, artist_id)
            VALUES('${name}', '${album_img}', ${artist_id})
        `)
        .then((dbRes) => {
            res.status(200).send(dbRes[0])
        })
        .catch(err => console.log(err))
    },

    getAlbums: (req,res) => {
        sequelize.query(`
        SELECT 
            albums.album_id,
            albums.name AS album,
            albums.album_img AS image,
            albums.artist_id,
            arist.name AS artist
        FROM albums
        JOIN artists
        ON albums.artist_id = artists.artist_id
        `)
    }
}