var apiKey = '78364b3e32a040fab4225f94bcfe4c5b';
var apiRestaurantsURL = 'https://api.geoapify.com/v2/places?categories=catering';

//search parameter for geographic information to filter by location
var geoLocation = '&filter=rect:-89.097540,39.668983,-88.399274,40.383412';
//search parameters; can limit amount of results
var searchParameters = geoLocation + '&limit=10&apiKey=';
var restaurantSearchURL = apiRestaurantsURL + searchParameters + apiKey;



//function that gets city and state names from api to inform search function




//function that handles form submit
function handleFormSubmit() {

    //function that takes user input and converts to api parameter to insert into var geoLocation that informs search parameters

    //run printResults() after converting user search into search parameters
    
}

//function that retreives api data console logs restaurant names, and renders search results
function printResults() {
    fetch(restaurantSearchURL, {

    })
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        for (var i = 0; i < data.features.length; i++) {
            console.log(data.features[i].properties.name);
            //print out search results to html
    
        }
    });
}




//event listeners
