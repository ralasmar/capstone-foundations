console.log('hi')
const newReviewBtn = document.querySelector("#submitReview")
const reviewSection = document.querySelector('.reviews')

//post review functions//////////////////////////////////////////////////
const getReviews = () => axios.get('http://localhost:4000/public/reviews')
    .then(res => {
        displayReviews(res.data)
    })
    .catch(err => console.log(err))

const postReview = (body) => axios.post('http://localhost:4000/public/myProfile', body)
    .then(res => {
        console.log(res.data)
        alert('Review Posted!')
       // displayReviews(res.data)
    })
    .catch(err => console.log(err))



const formHandler = (event) => {
    event.preventDefault()
    console.log('review clicked')
    let album = document.querySelector('#review-album-title')
    let artist = document.querySelector('#review-artist-title')
    let imageURL = document.querySelector("#review-album-cover")
    let body = document.querySelector('#new-review-body')
    
    let reviewObj = {
        album: album.value,
        artist: artist.value,
        imageURL: imageURL.value,
        body: body.value,
    }
    postReview(reviewObj)

}
// function createReviewCard(review) {
//     const reviewCard = document.createElement('div')
//     reviewCard.classList.add('review-card')

//     reviewCard.innerHTML = `<img alt = 'album cover' src=${review.imageURL} class = "review-album-cover"/>
//     <p class = "review-album-title">${review.album}</p>
//     <p class = "review-artist-title">${review.artist}</p>
//     <p class = "new-review-body">${review.body}</p>
    
//     <button onclick="deleteReview(${id})">Delete</button>
//     `
//     reviewSection.appendChild(reviewCard)
// }

function displayReviews(arr){
    arr.forEach(review => {
        createReviewCard(review)
    })
};

newReviewBtn.addEventListener('click', formHandler)