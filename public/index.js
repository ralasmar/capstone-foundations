//query selectors


// const newReviewBtn = document.querySelector("#submitReview")

//const deleteBtn = document.querySelector('#delete-review')

const searchAlbum = document.querySelector('#submit')
console.log(searchAlbum)
window.onload = function(){
    searchAlbum.addEventListener('click', searchDatabase)
}


 

  
    



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
















//deleteBtn.addEventListener('click', deleteReview)
//newReviewBtn.addEventListener('click', formHandler)
