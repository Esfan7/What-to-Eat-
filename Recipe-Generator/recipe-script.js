function redirectFunction(event){
    event.preventDefault()

    window.location.href = "../Restaurant-Search/restaurant.html";
}
document.getElementById("mainBtn").addEventListener("click", redirectFunction);


