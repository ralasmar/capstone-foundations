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
    let starRating = document.querySelectorAll('.stars')
    
    
    let reviewObj = {
        album: album.value,
        artist: artist.value,
        imageURL: imageURL.value,
        body: body.value,
        starRating: starRating,
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

//star rating feature------------------------------------------------
const stars = document.querySelectorAll(".stars span");

//loop through the stars nodelist
stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
     //loop through nodelist again
        stars.forEach((star, index2) => {
            //add the "active" class to the clicked star and any stars with a lower index
            //remove the "active" class from any stars with a higher index
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
        })
    })
})



newReviewBtn.addEventListener('click', formHandler)