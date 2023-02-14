var CategoryURL = 'www.themealdb.com/api/json/v1/1/list.php?c=list';
var AreaURL = 'www.themealdb.com/api/json/v1/1/list.php?a=list';
var IngredientsURL = 'www.themealdb.com/api/json/v1/1/list.php?i=list';

var recipeSearch = CategoryURL + AreaURL + IngredientsURL

fetch(recipeSearch ,{
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    for (var i = 0; i < data.features.length; i++) {
        console.log(data.features[i].properties.name);
    }
  });

console.log(recipeSearch)
var APIKey2 = "1";
var categoryChoices = "https://www.themealdb.com/api/json/v1/1/categories.php";
var countryChoices = 

function redirectFunction(event){
    event.preventDefault()

URLS: {
    base: recipeSearch
    Category: 'meals','strCategory';
    Area: 'meals','strArea';
    Ingredients: 'meals','strIngredients';
}}
