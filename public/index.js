//query selectors
//const followBtn = document.querySelector('#follow')
const changePicBtn = document.querySelector('#edit')
// const newReviewBtn = document.querySelector("#submitReview")
const reviewSection = document.querySelector('.reviews')


const baseURL = `http://localhost:4000/api/review`



//profile functions////////////////////////////////////////////////////////

const followUser = (evt) => {
    evt.preventDefault()
    alert(`You are now following this user`)
};

const updateProfilePic = (event) => {
    event.preventDefault()
    let image = document.querySelector('#profileImg')
    image.src = document.getElementById('profileLink').value
    axios.put("http://localhost:4000/api/profilePic/")
        .then(res => {
            const data = res.data
        })
        .catch(err => console.log(err))
};

// //post review functions//////////////////////////////////////////////////
const getReviews = () => axios.get('http://localhost:4000/public/reviews')
    .then(res => {
        console.log(res.data)
        displayReviews(res.data)
    })
    .catch(err => console.log(err))

// const postReview = (body) => axios.post('http://localhost:4000/public/myProfile', body)
//     .then(res => {
//        // displayReviews(res.data)
//     })
//     .catch(err => console.log(err))



// const formHandler = (event) => {
//     event.preventDefault()

//     let album = document.querySelector('#review-album-title')
//     let artist = document.querySelector('#review-artist-title')
//     let imageURL = document.querySelector("#review-album-cover")
//     let body = document.querySelector('#review-body')
    
//     let reviewObj = {
//         title: album.value,
//         artist: artist.value,
//         imageURL: imageURL.value,
//         body: body.value
//     }
//     postReview(reviewObj)

// }
function createReviewCard(review) {
    const reviewCard = document.createElement('div')
    reviewCard.classList.add('review-card')

    reviewCard.innerHTML = `<img alt = 'album cover' src=${review.imageURL} class = "review-album-cover"/>
    <p class = "review-album-title">${review.album}</p>
    <div class = "btns-review">
        <button onclick="deleteReview(${review.id})
    </div>
    `
    reviewSection.appendChild(reviewCard)
}

function displayReviews(arr){
    arr.forEach(review => {
        createReviewCard(review)
    })
};

getReviews()


//event listeners
//followBtn.addEventListener('click', followUser)
//changePicBtn.addEventListener('click',updateProfilePic)
// newReviewBtn.addEventListener('click', formHandler)
