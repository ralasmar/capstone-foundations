//query selectors
//const followBtn = document.querySelector('#follow')
const changePicBtn = document.querySelector('#edit')
const newReviewBtn = document.querySelector("#submitReview")

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

//post review functions//////////////////////////////////////////////////

const postReview = () => axios.post('http://localhost:4000/public/myProfile', body)
    .then(res = displayReviews(residata))
    .catch(err => console.log(err))



const formHandler = (event) => {
    event.preventDefault()

    let title = document.querySelector('#review-album-title')
    let artist = document.querySelector('#review-artist-title')
    let imageURL = document.querySelector("#review-album-cover")
    let body = document.querySelector('#review-body')
    
    let reviewObj = {
        title: title.value,
        artist: artist.value,
        imageURL: imageURL.value,
        body: body.value
    }

}
function createReviewCard(review) {
    const reviewCard = document.createElement('div')
    reviewCard.classList.add('review-card')

    reviewCard.innerHTML = `<img alt = 'album cover' src=${review.imageURL} class = "review-album-cover"/>
    <p class = "review-album-title">${album.title}</p>
    <div class = "btns-review">
        <button onclick="deleteReview(${review.id})
    </div>
    `
    reviewDisplay.appendChild(card)
}

function displayReviews(arr){
    reviewDisplay.innerHTML
    arr.map(review => {
        return createReviewCard(review)
    })
};



//event listeners
//followBtn.addEventListener('click', followUser)
changePicBtn.addEventListener('click',updateProfilePic)
newReviewBtn.addEventListener('click', postReview)
