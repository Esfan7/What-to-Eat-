var stayInEl = document.querySelector('#stayIN');
var goOutEl = document.querySelector('#goOUT');

stayInEl.addEventListener("click", function() {
    document.location.replace('./Recipe-Generator/recipe.html');
});

goOutEl.addEventListener("click", function(){
    document.location.replace('./Restaurant-Search/restaurant.html');
});
