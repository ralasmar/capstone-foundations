//query selectors

const searchAlbum = document.querySelector('#submit')
console.log(searchAlbum)




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
    <p class = "search-reviews">Username: ${search.reviews}</p>
    `

    searchResults.appendChild(searchCard)
}

function displaySearch(arr){
    arr.forEach(search => {
        createSearchCard(search)
    })
}
    
//searchDatabase()


searchAlbum.addEventListener('click', searchDatabase)
