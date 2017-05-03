(function(){
  'use strict';
})();

      let $myCity = $('#inputCity');
      let $myState = $('#inputState');
      let $myWind = $('#btnWind');
      let $myWeather = $("#btnWeather");
      var $myforecastDetails = $("#forecastDetails");
          let urlAPI; 
       
        $myWind.on('click', (event) => {
          alexRemove()
          $myCity = $('#inputCity')[0].value
          $myState = $('#inputState')[0].value
          urlAPI = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${$myCity}%2C%20${$myState}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
          
    $.ajax({url: urlAPI, success: function(result){
        $myforecastDetails.append($(`<h2>${result.query.results.channel.location.city}, ${result.query.results.channel.location.region}</h2>`))
        //console.log(result)
        writeCode(result.query.results.channel.wind)   
    },error: (errorMessage)=>{
      alert("Where is that?");
    }});
  });
      $myWeather.on('click', (event) => {
        alexRemove()
      
        $myCity = $('#inputCity')[0].value
          $myState = $('#inputState')[0].value
          urlAPI = `https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${$myCity}%2C%20${$myState}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`
          
    $.ajax({url: urlAPI, success: function(result){
        $myforecastDetails.append($(`<h2>${result.query.results.channel.location.city}, ${result.query.results.channel.location.region}</h2>`))
        //console.log(result)
        writeCode(result.query.results.channel.item.forecast[1])
    },error: (errorMessage)=>{
      alert("Where is that?");
    }});
  });
      
  function writeCode(val){
    //console.log(val)
    for (var property in val){
      if (val.hasOwnProperty(property)){
        $myforecastDetails.append($(`<h4>${property}: ${val[property]}</h4>`))
      }
    }
  }        

  function alexRemove(){
    $("h2").remove();
    $("h4").remove();
  }
 
  displayError(){

    let $myCity = $('#myCity')[0].value;
    let $myState = $('#myState')[0].value;
    if (city === "" || $myState === ""){
        throw new Error ("Need to set location")
    }
  };

































/*
let city = ""

 const urlAPI: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"
 dataType: 'json',
 $.ajax(urlToQuery).done((event)=>{
   console.log('RESOLVED', event);
 })
 .error((event)=>{
   console.log('ERRORED', event);
 });
 
 class Weather {
  constructor(city, state){
      this.city = city;
      this.state = state;
  }
}




var getWeather = () => 
{
document.getElementById('city').addEventListener('click', function(event){
   add.city("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + {City} "%2C%20" + {State} + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys") // concatenate "city" into url string
document.getElementById('state').addEventListener('click', function(event){
  add.state("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + {City} "%2C%20" + {State} + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys") // concatenate "state" into url string
}
//somehow have this concatenate onto the url as a string

class Weather {
  constructor(city, state){
      this.city = city;
      this.state = state;
  }
}

  constructor(wNode){
    this.$location = wNode;
  }

  let $myLocation = $('#inputlocation');
  new Weather ($myLocation);

let weather = new Weather ('boston', 'MA')

console.log()
*/