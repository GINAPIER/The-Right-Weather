// I neewd to create a variable for the time
// i need and api key
// i need a current weather,showing: winds, humidity, uv index
// i need to show color for uv faborable, moderate and severe
// i need a 5 day forcast
//to show the las searched city
// I need top create a function that when I click on the button it will console something -
// I want to check the input Value I want to see the text inside 
// I want to when I hit submit I want to console the value of the input  
// I want to know how to store/get value in localstorage  -
// When I click on the button it wil;l take the value from my input to the local storage  -


//time
var timeDate = moment().format('MMMM Do YYYY, h:mm:ss a');
$(".time").append(timeDate);

var currentWeather = $("#currentWeather");
var cities = []
var city = $(this).attr("data-name");
var forcast = $("#forcast");
var input = $("#city");
var button = $("#submitWeather");
// var cities =["city.name", "temperature", "wind", "humidity", "uv-index"];

var APIKey = "4bd597b40548d1cccc53656df6279a55";




$("#submitWeather").click(function () {
  // console.log( "my button is clicked" );
  var city = $(this).attr("data-name");
  console.log(currentWeather);
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;


  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      // We store all of the retrieved data inside of an object called "response"
      console.log(queryURL);
      // Log the resulting object
      console.log(response);
      // Creating a div to hold the waether
      var cityDiv = $("<div class='city'>");
      var currentWeatherDiv = $("<div class='currentWeather'>");
      var forcastDiv = $("<div class='forcastDiv'>");
    });

  // Storing the weather data
  var cityWeather = response.cityWeather;

  // Creating an element to have the weather displayed
  var pOne = $("<p>").text("City: " + cityWeather);
  // Displaying the weather
  cityWeather.append(pOne);
});

// Function for displaying movie data
function renderCities() {

  // Deleting the movies prior to adding new movies
  // (this is necessary otherwise you will have repeat buttons)
  $("#buttons-view").empty();

  // Looping through the array of cities
  for (var i = 0; i < cities.length; i++) {

    // Then dynamicaly generating buttons for each citiy in the array
    // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
    var a = $("<button>");
    // Adding a class of movie-btn to our button
    a.addClass("city-btn");
    // Adding a data-attribute
    a.attr("data-name", cities[i]);
    // Providing the initial button text
    a.text(cities[i]);
    // Adding the button to the buttons-view div
    $("#buttons-view").append(a);
  }
}


// This function handles events where button is clicked
$("#submitWeather").on("click", function (event) {
  event.preventDefault();
  // This line grabs the input from the textbox
  var city = $("#city-input").val().trim();

  // Adding cities from the textbox to our array
  cities.push(city);

  displayCityWeather();
  displayForecast();
  renderCities();

});

// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", ".city", displayCityWeather);

// Calling the renderButtons function to display the initial buttons
renderCities();

function displayCityWeather() {
  $("#currentWeather").empty()
  var cityWeather = $(this).attr(city);
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response)
    //temperature
    var tempCond = response.main.temp
    var pOne = $("<P>").text("Temperature: " + tempCond)
    currentWeatherDiv.append(pOne);
    //humidity
    var humidityCond = response.main.humidityCond
    var pTwo = $("<p>").text("Humidity: " + humidityCond + "%")
    //wind
    var windCond = response.wind.speed
    var pThree = $("<p>").text("Wind: " + windCond + "MPH")
    currentWeatherDiv.append(pThree);
  })
};















