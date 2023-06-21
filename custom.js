setTimeout(function(){
    let fromLocation = document.querySelector(".directions-icon-depart");
    fromLocation.classList.remove('directions-icon-depart');
    fromLocation.innerText = "শুরু";

    let toLocation = document.querySelector(".directions-icon-arrive");
    toLocation.classList.remove('directions-icon-arrive');
    toLocation.innerText = "সমাপ্তি";
}, 1000)

setTimeout(function(){
    let classes = document.querySelectorAll(".mapboxgl-ctrl-geocoder");
    classes[0].querySelector('input').placeholder = "যাত্রা শুরুর স্থান নির্বাচন করুন"
    classes[1].querySelector('input').placeholder = "যাত্রা সমাপ্তির স্থান নির্বাচন করুন"
}, 1000)