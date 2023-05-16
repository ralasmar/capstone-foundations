//profile functions

function followUser(evt){
    evt.preventDefault()
    alert(`You are now following this user`)
}

let followBtn = document.querySelector('#follow')
followBtn.addEventListener('click', followUser)