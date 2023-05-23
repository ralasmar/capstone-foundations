const followBtn = document.querySelector('#follow')
const likesText = document.querySelector('#like')
const dislikesText = document.querySelector('#dislike')
const likesText2 = document.querySelector('#like2')
const dislikesText2 = document.querySelector('#dislike2')
const likesText3 = document.querySelector('#like3')
const dislikesText3 = document.querySelector('#dislike3')

//functions------------------------------------------------------
const followUser = (evt) => {
    evt.preventDefault()
    alert(`You are now following this user`)
};

//likes/dislike functions

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


//event listeners---------------------------------------------------
followBtn.addEventListener('click', followUser)
likesText.addEventListener('click', likesCounter)
dislikesText.addEventListener('click', dislikesCounter)
likesText2.addEventListener('click', likesCounter2)
dislikesText2.addEventListener('click', dislikesCounter2)
likesText3.addEventListener('click', likesCounter3)
dislikesText3.addEventListener('click', dislikesCounter3)