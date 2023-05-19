//query selectors
const followBtn = document.querySelector('#follow')
const changePicBtn = document.querySelector('#edit')
// const newReviewBtn = document.querySelector("#submitReview")
const reviewSection = document.querySelector('.reviews')
//const deleteBtn = document.querySelector('#delete-review')
const likesText = document.querySelector('#like')
const dislikesText = document.querySelector('#dislike')



//profile functions////////////////////////////////////////////////////////

const updateProfilePic = (event) => {
    event.preventDefault()
    let image = document.querySelector('#profileImg')
    image.src = document.getElementById('profileLink').value
    axios.put("http://localhost:4000/public/myProfile/")
        .then(res => {
            const data = res.data
        })
        .catch(err => console.log(err))
};

const followUser = (evt) => {
    evt.preventDefault()
    alert(`You are now following this user`)
};

let likes = 0
const likesCounter = (event) => {
    event.preventDefault()
    likes += 1
    console.log(`likes: ${likes}`)
    const likesCount = document.createElement('p')
    likesCount.textContent = `<p id="likesCount">${likes}</p>`
};

let dislikes = 0
const dislikesCounter = (event) => {
    event.preventDefault()
    dislikes += 1
    console.log(`dislikes: ${dislikes}`)
 
};


////review functions//////////////////////////////////////////////////
const getReviews = () => axios.get('http://localhost:4000/public/reviews')
    .then(res => {
        console.log(res.data)
        displayReviews(res.data)
    })
    .catch(err => console.log(err))



const deleteReview = (id) => {
    axios.delete(`http://localhost:4000/public/myProfile/${id}`)
        .then(res => {
            const data = res.data
            alert('Review Deleted')
            console.log(data)
        })
        .catch(err => console.log(err))
}
   
    


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
    <p class = "review-artist-title">${review.artist}</p>
    <p class = "new-review-body">${review.body}</p>
    
     <button id="delete-review" onclick="deleteReview(${review.id})">Delete</button>
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
//changePicBtn.addEventListener('click', updateProfilePic)
likesText.addEventListener('click', likesCounter)
dislikesText.addEventListener('click', dislikesCounter)

//deleteBtn.addEventListener('click', deleteReview)
//newReviewBtn.addEventListener('click', formHandler)
