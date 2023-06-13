setTimeout(function(){
    let fromLocation = document.querySelector(".directions-icon-depart");
    fromLocation.classList.remove('directions-icon-depart');
    fromLocation.innerText = "From";

    let toLocation = document.querySelector(".directions-icon-arrive");
    toLocation.classList.remove('directions-icon-arrive');
    toLocation.innerText = "To";
}, 1000)