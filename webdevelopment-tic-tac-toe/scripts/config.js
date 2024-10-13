function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid; // +'1' => 1
    playerConfigOverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
}
  
function closePlayerConfig() {
    playerConfigOverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent = '';
    formElement.firstElementChild.lastElementChild.value = '';
}


function savePlayerConfig(event) {
    //1, get username
    //console.log(event); //to see what inside in it
    event.preventDefault(); //no longer reload page 
    const formData = new FormData(event.target);
    const enteredPlayername = formData.get('playername').trim();//trim= '  Max Scwarz   '=> 'Max Scwarz' 
    //console.log(enteredPlayername)

    //2, when typing space
    if (!enteredPlayername) { // enteredPlayername === ''
        //event.target.firstElementChild.className = 'error' // overwrite 當前的 className, 但目前是想要增加 class, 所以不能這樣做
        event.target.firstElementChild.classList.add('error');
        errorsOutputElement.textContent = 'Please enter a valid name!';
        return; //when execute the return, stop the execution of the function
    }

    //3, set playerName
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;
  
    //4, save playerName
    // if (editedPlayer === 1){
    //     player[0].name = enteredPlayername;
    // } else {
    //     player[1].name = enteredPlayername;
    // }
    players[editedPlayer - 1].name = enteredPlayername;//更短的寫法

    //5, close after submitting the form
    closePlayerConfig();
}