const changePicBtn = document.querySelector('#edit')
const reviewSection = document.querySelector('.reviews')


//functions-----------------------------------------------------
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

//review functions
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
            location.reload()
            console.log(data)
        })
        .catch(err => console.log(err))
};

function createReviewCard(review) {
    const reviewCard = document.createElement('div')
    reviewCard.classList.add('review-card')

    reviewCard.innerHTML = `<img alt = 'album cover' src=${review.imageURL} class = "review-album-cover"/>
    <p class = "review-album-title">${review.album}</p>
    <p class = "review-artist-title">${review.artist}</p>
    <p class = "new-review-body">${review.body}</p>
    

     <button id="delete-review" onclick="deleteReview(${review.id})">Delete</button>
    `
    for (let i=0;i<review.starRating; i++){
        let star = document.createElement('span')
        star.textContent = String.fromCodePoint(9733)
        star.classList.add('active')
        reviewCard.appendChild(star)
    }
    reviewSection.prepend(reviewCard)
      
}

function displayReviews(arr){
    arr.forEach(review => {
        createReviewCard(review)
    })
  
};

getReviews()

// // //star rating feature------------------------------------------------
// const stars = document.querySelectorAll(".stars span");

// //loop through the stars nodelist
// stars.forEach((star, index1) => {
//     star.addEventListener("click", () => {
//      //loop through nodelist again
//         stars.forEach((star, index2) => {
//             console.log(index2)
//             //add the "active" class to the clicked star and any stars with a lower index
//             //remove the "active" class from any stars with a higher index
//             index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
//         })
//     })
// })


changePicBtn.addEventListener('click', updateProfilePic)