var apiKey = '78364b3e32a040fab4225f94bcfe4c5b';
var apiRestaurantsURL = 'https://api.geoapify.com/v2/places?categories=catering';

//search parameter for geographic information to filter by location
var geoLocation = '&filter=rect:-89.097540,39.668983,-88.399274,40.383412';
//search parameters; can limit amount of results
var searchParameters = geoLocation + '&limit=10&apiKey=';
var restaurantSearchURL = apiRestaurantsURL + searchParameters + apiKey;

var searchFormEl = document.querySelector('#search-form');
var citySearchVal = document.querySelector('#city-search').value;
var placeID;



//function that gets city and state names from api to inform search function




//function that handles form submit
function handleFormSubmit(event) {
    event.preventDefault();

    //function that takes user input and converts to api parameter to insert into var geoLocation that informs search parameters
    console.log(citySearchVal);
    
    
    getCityData(citySearchVal);

    //need to put placeID into restaurant url to print results
    function getCityData() {
        fetch(`https://api.geoapify.com/v1/geocode/search?text=${citySearchVal}&format=json&apiKey=${apiKey}`, {
    
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            placeID = data.results[1].place_id;
            console.log(placeID);
            printResults()

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
        });
    
    }

    if (!citySearchVal) {
        console.error('You need a search input value!');
        return;
    }



    //run printResults() after converting user search into search parameters
    
}



//function that retreives api data console logs restaurant names, and renders search results

//event listeners
searchFormEl.addEventListener('submit',handleFormSubmit);