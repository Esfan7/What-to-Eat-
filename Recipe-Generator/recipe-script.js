// APIs that will be filering recipes based on criteria
var APIKey2 = "1";
var categoryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";
var areaURL = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";

// listing different areas and categories for user selection
var categories = {"meals":[{"strCategory":"Beef"},{"strCategory":"Breakfast"},{"strCategory":"Chicken"},{"strCategory":"Dessert"},{"strCategory":"Goat"},{"strCategory":"Lamb"},{"strCategory":"Miscellaneous"},{"strCategory":"Pasta"},{"strCategory":"Pork"},{"strCategory":"Seafood"},{"strCategory":"Side"},{"strCategory":"Starter"},{"strCategory":"Vegan"},{"strCategory":"Vegetarian"}]}
var areas = {"meals":[{"strArea":"American"},{"strArea":"British"},{"strArea":"Canadian"},{"strArea":"Chinese"},{"strArea":"Croatian"},{"strArea":"Dutch"},{"strArea":"Egyptian"},{"strArea":"French"},{"strArea":"Greek"},{"strArea":"Indian"},{"strArea":"Irish"},{"strArea":"Italian"},{"strArea":"Jamaican"},{"strArea":"Japanese"},{"strArea":"Kenyan"},{"strArea":"Malaysian"},{"strArea":"Mexican"},{"strArea":"Moroccan"},{"strArea":"Polish"},{"strArea":"Portuguese"},{"strArea":"Russian"},{"strArea":"Spanish"},{"strArea":"Thai"},{"strArea":"Tunisian"},{"strArea":"Turkish"},{"strArea":"Unknown"},{"strArea":"Vietnamese"}]}


function userChoice(event){
    var submissionForm1 = categoryURL + `${document.querySelector(`#category`).value}`;
    var submissionForm2 = areaURL + `${document.querySelector(`#area`).value}`;
    event.preventDefault()
    console.log(submissionForm1);
    console.log(submissionForm2);
}
document.getElementById("userBtn").addEventListener("click", resultsPage);


function redirectFunction(event){
    event.preventDefault()
    window.location.href = ".restaurant.html";
}

document.getElementById("mainBtn").addEventListener("click", function(){
    event.preventDefault()
    window.location.href = "../Restaurant-Search/restaurant.html";

});
