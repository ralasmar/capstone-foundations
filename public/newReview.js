console.log('hi')
const newReviewBtn = document.querySelector("#submitReview")
const reviewSection = document.querySelector('.reviews')


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
    })
    .catch(err => console.log(err))

    
let rating
function handleStars(event){
    rating = event.currentTarget.id
}


let starRating = document.querySelectorAll('.stars span')
console.log(starRating)    
for (let i = 0; i< starRating.length; i++){
    starRating[i].addEventListener('click', handleStars)
}

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
        starRating: rating
        
    }
    console.log(reviewObj)
    postReview(reviewObj)

}

function displayReviews(arr){
    arr.forEach(review => {
        createReviewCard(review)
    })
};




newReviewBtn.addEventListener('click', formHandler)