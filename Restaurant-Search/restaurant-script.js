var apiKey = '78364b3e32a040fab4225f94bcfe4c5b';
var apiRestaurantsURL = 'https://api.geoapify.com/v2/places?categories=catering';
var searchParameters = '&filter=rect:-89.097540,39.668983,-88.399274,40.383412&limit=20&apiKey=';

var restaurantSearchURL = apiRestaurantsURL + searchParameters + apiKey;

var restaurantData;


fetch(restaurantSearchURL, {

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

