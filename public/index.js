//query selectors
const followBtn = document.querySelector('#follow')

//profile functions

const followUser = (evt) => {
    evt.preventDefault()
    alert(`You are now following this user`)
}


//event listeners
followBtn.addEventListener('click', followUser)