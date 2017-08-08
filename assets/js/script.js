$(document).ready(function(){   
  //get latidude and longitude
  $.getJSON("https://ipinfo.io/", function(json) {
    $(".location").html(json.city + ", " + json.region);
    getData(json.loc);
    // console.log(json.city);
  }); //end JSON call
  
  //API call to Dark Sky with coords
  //https://darksky.net/dev/
  function getData(loc) {
      var lati = loc.split(",")[0];
      var long = loc.split(",")[1];
      var darkSkyKey = "1fdf13244735936bf1a2b5d6de49d125";
      var corsURL = "https://cors-anywhere.herokuapp.com/";
      var weatherURL = corsURL + "https://api.darksky.net/forecast/" + darkSkyKey + "/" + lati + "," + long;
      // console.log(weatherURL); 
      
      //retrieve weather data
      $.getJSON(weatherURL, function(data) {
        var icon = data.currently.icon;
        // $(".icon").html("Icon: <br/>");

        var tempF = Math.round(data.currently.temperature);
        $(".tempF").html("Current Temperature: <br/>" + tempF + "\xB0F");
        // console.log(data.currently.summary);
        
      //Skycons https://darkskyapp.github.io/skycons/
      //***YOU NEED TO C&P in JS Section setting in CodePen: https://rawgit.com/darkskyapp/skycons/master/skycons.js***
      var skycons = new Skycons({"color": "green"});

      function weatherIcon(){
        if (icon === "clear-day") {
          skycons.add("icon1", Skycons.CLEAR_DAY);
        } else if (icon === "clear-night") {
          skycons.add("icon1", Skycons.CLEAR_NIGHT);
        } else if (icon === "rain") {
          skycons.add("icon1", Skycons.RAIN);
        } else if (icon === "snow") {
          skycons.add("icon1", Skycons.SNOW);
        } else if (icon === "sleet") {
          skycons.add("icon1", Skycons.SLEET);
        } else if (icon === "wind") {
          skycons.add("icon1", Skycons.WIND);
        } else if (icon === "fog") {
          skycons.add("icon1", Skycons.FOG);
        } else if (icon === "cloudy") {
          skycons.add("icon1", Skycons.CLOUDY);
        } else if (icon === "clear-night") {
          skycons.add("icon1", Skycons.CLEAR_NIGHT);
        } else if (icon === "partly-cloudy-day") {
          skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
        } else if (icon === "partly-cloudy-night") {
          skycons.add("icon1", Skycons.PARTLY_CLOUDY_NIGHT);
        } else {
          console.log("Dark Sky icon did not return a matching case");
        }
        skycons.play();
      }
      weatherIcon();
      
      //unit conversion button
      function tempConversion() {
        var tempC = Math.round((tempF - 32) * (5/9));
        var windKPH = Math.round(windSpeed * 1.60934);
          // console.log(tempC);
          $(".convert").click(function() {
            if ($(".tempF").is(":contains('\xB0F')")) {
              $(".tempF").html("Current Temperature: <br/>" + tempC + "\xB0C");
              $(".windSpeed").html("Current Wind Speed: <br/>" + windKPH + " kph");
            } else {
              $(".tempF").html("Current Temperature: <br/>" + tempF + "\xB0F");
              $(".windSpeed").html("Current Wind Speed: <br/>" + windSpeed + " mph");
            }
        });
      }
      tempConversion();
           
      }) //end JSON call
    
  } //end getData
  
}) //end doc ready
