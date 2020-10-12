const API_KEY = 'e2a8dcf5fe8345ffba52d013705090e5';
let location= 'toronto';


function getForecast(){
    return fetch('https://api.weatherbit.io/v2.0/current?city=' + location + ',CA&key=' + API_KEY )
    .then(res => res.json())
     
}
function getCity(loc){
    return fetch('https://api.weatherbit.io/v2.0/current?city=' + loc + ',CA&key=' + API_KEY )
    .then(res => res.json())
}

export default {
    getForecast,
    getCity
    
    
};

