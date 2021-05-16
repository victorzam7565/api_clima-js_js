const API_KEY = "8f3194c3f60f838fab6b9df92a694727"
const fecthData =position=>{
const { latitud, longitude}= position.coords;
fetch ("http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitude}&appid=${API_KEY}")

.then(response => console.log(responsive));

console.log(position);

}
const onload =() => {
navigator.geolocation.getCurrentPosition(log);

}