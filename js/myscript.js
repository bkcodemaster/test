

let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let period = hours >= 12 ? 'PM' : 'AM';
let day = currentTime.toLocaleString('en-US', { weekday: 'long' });
// Convert to 12-hour format
hours = hours % 12;
hours = hours ? hours : 12;
// Add leading zeros if necessary
hours = hours < 10 ? '0' + hours : hours;
minutes = minutes < 10 ? '0' + minutes : minutes;
var formattedTime = hours + ':' + minutes + ' ' + period;
let cityname = prompt("Please enter your City Name", "Mumbai");
if(currentTime >=18){
    let nighttime = './images/night.png';
    $("#day-time").attr("src",nighttime);
}
$("#time").html(formattedTime);
const settings = {
	async: true,
	crossDomain: true,
	url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+cityname,
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'acc15a6deemshe6ca17b3dd0f31cp10f223jsnf3696bb0ab50',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};


$.ajax(settings).done(function (response) {
 var sunriseTimestamp = response.sunrise * 1000; // Multiply by 1000 to convert to milliseconds
var sunriseDate = new Date(sunriseTimestamp);
let sunrisehrs = currentTime.getHours();
let sunrisemin = currentTime.getMinutes();
let sunrisesec = currentTime.getSeconds();
let suntimein = sunrisehrs+":"+sunrisemin+":"+":"+sunrisesec;
    
console.log(sunriseDate);
	console.log(response);
    let txt2 = `<sup>o</sup>`;
    $("#cityname").text(cityname);
    $(".temp").html(response.temp+ txt2 );
    $(".humidity-deg").text(response.humidity+" "+"%");
    $(".sunrise-deg").text(suntimein);
    $(".windspeed").text(response.wind_speed+" "+"m/s");
    $(".wind-deg").text(response.wind_degrees);
    $(".daydate").text(day);
    
});
$(".refre-img").on("click",function(){
    location.reload();
});

