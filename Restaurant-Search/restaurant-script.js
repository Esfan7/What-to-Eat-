var apiKey = '78364b3e32a040fab4225f94bcfe4c5b';
var apiRestaurantsURL = 'https://api.geoapify.com/v2/places?categories=catering&filter=place:';

//search parameters; can limits amount of results to 5
var searchParameters = '&limit=5&apiKey=';

var searchFormEl = document.querySelector('#search-form');
var citySearchVal = document.querySelector('#city-search').value;
var recipeRedirect = document.querySelector('#recipeBtn');
var resultHeader = document.querySelector('#searched-city-heading');
var placeID;

//DOM selectors for result cards
var restName1 = document.querySelector('#rest-name1');
var restAdd1 = document.querySelector('#rest-address1');
var restName2 = document.querySelector('#rest-name2');
var restAdd2 = document.querySelector('#rest-address2');
var restName3 = document.querySelector('#rest-name3');
var restAdd3 = document.querySelector('#rest-address3');
var restName4 = document.querySelector('#rest-name4');
var restAdd4 = document.querySelector('#rest-address4');
var restName5 = document.querySelector('#rest-name5');
var restAdd5 = document.querySelector('#rest-address5');


//function that handles form submit
function handleFormSubmit(event) {
    event.preventDefault();
    citySearchVal = document.querySelector('#city-search').value;

    //function that takes user input and converts to api parameter to insert into var geoLocation that informs search parameters
    console.log(citySearchVal);

    getRestaurantNames(citySearchVal);    

    if (!citySearchVal) {
        console.error('You need a search input value!');
        return;
    }    
}

//function that retrieves restaurant names from user search 
function getRestaurantNames() {
    //first fetch method to retrieve place_id to include in search parameter in printResults()
    fetch(`https://api.geoapify.com/v1/geocode/search?text=${citySearchVal}&format=json&apiKey=${apiKey}`, {

    })
    .then(function (response) {
        console.log(response);
        return response.json();
    })
    .then(function (data) {
        placeID = data.results[1].place_id;
        console.log(placeID);
        //store placeID to localStorage to retreive in printResults()
        localStorage.setItem('place-id',placeID)
        printResults(placeID);
        return;
        
    })
    .catch(function (error) {
        console.log(error)
        resultHeader.textContent = 'City not found. Please try a searching another city.'
    });

    //prints out restaurant results using placeID as a city search parameter for api
    function printResults() {
        placeID = localStorage.getItem('place-id');

        fetch(apiRestaurantsURL + placeID + searchParameters + apiKey, {
    
        })
        .then(function (response) {
            console.log(response);
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (var i = 0; i < data.features.length; i++) {
                console.log(data.features[i].properties.name);
            }
            //write city and state to html to confirm user search
            resultHeader.textContent = 'Here are some restaurants in ' + data.features[0].properties.city + ', ' + data.features[0].properties.state;
        
            //print out search results to html    
            restName1.textContent = data.features[0].properties.name
            restAdd1.textContent = data.features[0].properties.address_line2

            restName2.textContent = data.features[1].properties.name
            restAdd2.textContent = data.features[1].properties.address_line2

            restName3.textContent = data.features[2].properties.name
            restAdd3.textContent = data.features[2].properties.address_line2

            restName4.textContent = data.features[3].properties.name
            restAdd4.textContent = data.features[3].properties.address_line2

            restName5.textContent = data.features[4].properties.name
            restAdd5.textContent = data.features[4].properties.address_line2
        });
    }
}


//event listeners
searchFormEl.addEventListener('submit',handleFormSubmit);
recipeRedirect.addEventListener('click', function(){
    window.location.href = "../Recipe-Generator/recipe.html";
});