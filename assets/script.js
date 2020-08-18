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



var currentWeather = $("#currentWeather");
var cities = []
// var city = $(this).attr("data-name");
var tempF = $(".tempF");
var humidity = $(".humidity")
var input = $("#city");
var button = $("#submitWeather");


var APIKey = "4bd597b40548d1cccc53656df6279a55";





// console.log( "my button is clicked" );
var city = "London";


function displayCityWeather() {

  var queryURL = "https://api.openweathermap.org/data/2.5/weather?" + "q=" + city + "&appid=" + APIKey;
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(queryURL)
    console.log(response)

    var UnixTimestamp = (response.dt)
    console.log(UnixTimestamp)
    var milliseconds = UnixTimestamp * 1000
    console.log(milliseconds)
    var dateObject = new Date(milliseconds)
    console.log(dateObject)
    var timeZone = (response.city.main.timezone)
    // console.log(timeZone)
    //         //console logs day, date, time, and timezone,
    var humanDateFormat = dateObject.toLocaleDateString("en-US", { month: "numeric", day: "numeric", year: "numeric" })

    console.log(humanDateFormat)

    $("#currentWeather").text(city + " " + humanDateFormat)




    //get the wind
    $(".wind").text("Wind Speed: " + response.wind.speed + "MPH")

    //get the humidity 
    $(".humidity").text("humidity %:" + response.main.humidity)

    //get the temperature 
    var Farenheit = (response.main.temp - 273.15) * 1.80 + 32;

    $(".temp").text("temp:" + Farenheit.toFixed(2))

    function displayCityUvIndex() {

      // nest the second AJAX for the UV 
      var uvURL = "https://api.openweathermap.org/data/2.5/uvi?" + city + "&appid=" + lat + "&lat=" + lon + "&lon=" + APIKey;
      $.ajax({
        url: uvURL,
        method: "GET"
      }).then(function (response) {
        console.log(uvURL)
        console.log(response)
        var lat = response.city.coord.lat;
        console.log(lat)
        var lon = response.city.coord.lon;
        console.log(lon)
        console.log(uvURL)
        // var uvIndex = 
        $(".uv").text("Uv Index: " + response.city.uv);
        console.log(uvURL)



      })
    }

  })
}


  // Add the 3 rd AJAX for the Forecast 
  var forcast = ["city", "forcast-temperature", "forcast-wind", "forcast-humidity", "uv-index"];

  var forcastURL = "https://api.openweathermap.org/data/2.5/forecast?" + "q=" + city + "&appid=" + APIKey;
  $.ajax({
    url:forcastURL,
    method: "GET"
  }).then(function (response){
    console.log(forcastURL)
$("#forecast-container").text("5 Day Forcast:"  + response.city.forcast);
   }) 
 



displayCityWeather()
