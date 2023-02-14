var apiKey = '78364b3e32a040fab4225f94bcfe4c5b';
var apiRestaurantsURL = 'https://api.geoapify.com/v2/places?categories=catering&filter=place:';

//search parameters; can limits amount of results to 10
var searchParameters = '&limit=10&apiKey=';

var searchFormEl = document.querySelector('#search-form');
var citySearchVal = document.querySelector('#city-search').value;
var placeID;



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

function getRestaurantNames() {
    //first fetch method to retrieve place_id to include in search parameter in printResults()
    fetch(`https://api.geoapify.com/v1/geocode/search?text=${citySearchVal}&format=json&apiKey=${apiKey}`, {

    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        placeID = data.results[1].place_id;
        console.log(placeID);
        //store placeID to localStorage to retreive in printResults()
        localStorage.setItem(citySearchVal,placeID)
        printResults(placeID);
        return;
        
    });

    //prints out restaurant results using placeID as a city search parameter for api
    function printResults() {
        placeID = localStorage.getItem(citySearchVal);

        fetch(apiRestaurantsURL + placeID + searchParameters + apiKey, {
    
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (var i = 0; i < data.features.length; i++) {
                console.log(data.features[i].properties.name);
                //print out search results to html

                
            }
        });
    }
}


//event listeners
searchFormEl.addEventListener('submit',handleFormSubmit);