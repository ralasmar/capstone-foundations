//query selectors
const changePicBtn = document.querySelector('#edit')
const followBtn = document.querySelector('#follow')
// const newReviewBtn = document.querySelector("#submitReview")
const reviewSection = document.querySelector('.reviews')
//const deleteBtn = document.querySelector('#delete-review')
const likesText = document.querySelector('#like')
const dislikesText = document.querySelector('#dislike')
const likesText2 = document.querySelector('#like2')
const dislikesText2 = document.querySelector('#dislike2')
const likesText3 = document.querySelector('#like3')
const dislikesText3 = document.querySelector('#dislike3')
const searchAlbum = document.querySelector('#submit')
console.log(searchAlbum)
window.onload = function(){
    searchAlbum.addEventListener('click', searchDatabase)
}


 //profile functions////////////////////////////////////////////////////////

const updateProfilePic = (event) => {
    event.preventDefault()
    let image = document.querySelector('#profileImg')
    image.src = document.getElementById('profileLink').value
    axios.put("http://localhost:4000/public/myProfile/", {photo:image.src})
        .then(res => {
            const data = res.data
        })
        .catch(err => console.log(err))
};

const followUser = (evt) => {
    evt.preventDefault()
    alert(`You are now following this user`)
};
  
    

//likes/dislike functions//////////////////////////////////////////////////////

let likes = 0
const likesCounter = (event) => {
    event.preventDefault()
    likes += 1
    console.log(`likes: ${likes}`)
    const likesCount = document.querySelector('#likes')
    likesCount.innerHTML = `${likes} likes`
    
};

let dislikes = 0
const dislikesCounter = (id) => {
    //event.preventDefault()
    dislikes += 1
    console.log(`dislikes: ${dislikes}`)
    const dislikesCount = document.querySelector('#dislikes')
    dislikesCount.innerHTML = `${dislikes} dislikes`
 
};

let likes2 = 0
const likesCounter2 = (event) => {
    event.preventDefault()
    likes2 += 1
    console.log(`likes: ${likes2}`)
    const likesCount = document.querySelector('#likes2')
    likesCount.innerHTML = `${likes2} likes`
    
};

let dislikes2 = 0
const dislikesCounter2 = (event) => {
    event.preventDefault()
    dislikes2 += 1
    console.log(`dislikes: ${dislikes2}`)
    const dislikesCount = document.querySelector('#dislikes2')
    dislikesCount.innerHTML = `${dislikes2} dislikes`
 
};

let likes3 = 0
const likesCounter3 = (event) => {
    event.preventDefault()
    likes3 += 1
    console.log(`likes: ${likes3}`)
    const likesCount = document.querySelector('#likes3')
    likesCount.innerHTML = `${likes3} likes`
    
};

let dislikes3 = 0
const dislikesCounter3 = (event) => {
    event.preventDefault()
    dislikes3 += 1
    console.log(`dislikes: ${dislikes3}`)
    const dislikesCount = document.querySelector('#dislikes3')
    dislikesCount.innerHTML = `${dislikes3} dislikes`
 
};



// const getLikes = () => axios.get('http://localhost:4000/profile')
//     .then(res => {
//         console.log(res.data)
//     })
//     .catch(err => console.log(err))

// const displayLikes = (event) => {
//     event.preventDefault()
//     let newLikes = document.querySelector('#likes')
//     newLikes.innerHTML = ("0", "1")

// } 


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
};



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


//database search/////////////////////////////////////////////////////
function searchDatabase(){
    let input = document.getElementById('searchInput')
    console.log(input.value)
    axios.get(`http://localhost:4000/public/search/?albums=${input.value}`)
        .then(res => {
            const data = res.data
            createSearchCard(data[0])
        })
        .catch(err => console.log(err))
}

function createSearchCard(search){
    console.log(search)
    const searchCard = document.createElement('div')
    searchCard.classList.add('search-card')

    searchCard.innerHTML = `<img alt = 'album cover' src=${search.image} class = "search-album-cover"/>
    <p class = "search-album-title">${search.album}</p>
    <p class = "search-artist-title">${search.artist}</p>
    `

    searchResults.appendChild(searchCard)
}

function displaySearch(arr){
    arr.forEach(search => {
        createSearchCard(search)
    })
}
    
//searchDatabase()




//event listeners

// using window.onload because this event listener executes before the DOM fully loads causing an error
window.onload = function(){
    changePicBtn.addEventListener('click', updateProfilePic)
}


followBtn.addEventListener('click', followUser)

likesText.addEventListener('click', likesCounter)
dislikesText.addEventListener('click', dislikesCounter)
likesText2.addEventListener('click', likesCounter2)
dislikesText2.addEventListener('click', dislikesCounter2)
likesText3.addEventListener('click', likesCounter3)
dislikesText3.addEventListener('click', dislikesCounter3)










//deleteBtn.addEventListener('click', deleteReview)
//newReviewBtn.addEventListener('click', formHandler)
