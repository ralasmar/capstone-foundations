require('dotenv').config()
const express = require("express")
const cors = require("cors")
const app = express();
const {SERVER_PORT} = process.env
const{seed} = require('./seed.js')
const { getArtists, createAlbum, getAlbums, updateProfilePic, postReview, getReviews, deleteReview } = require('./controller.js')


app.use(cors())
app.use(express.json())

app.post('/seed', seed)

//artists 
app.get('/artists', getArtists)

//albums
app.get('/albums', getAlbums)
app.post('/albums', createAlbum)

//crud functionality
app.put('/public/myProfile', updateProfilePic)
app.post('/public/myProfile', postReview)
app.get('/public/reviews', getReviews)
app.delete('/public/myProfile/:id', deleteReview)



app.listen(SERVER_PORT, () => console.log(`server running on ${SERVER_PORT}`))
