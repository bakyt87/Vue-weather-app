<template>
<div id="home">
 
 
   <div class="container-fluid">
        <form>
   <div class="form-group">
     <br>
      <label class="card_data" for="city_name">Enter city name , country</label>
      <br>
      <input v-model="location" type="text" class="form-control" id="city_name" aria-describedby="emailHelp" placeholder="city name">
      <br>
      <button @click= "updateLocation" type="submit" class="btn btn-primary">Search</button>
    </div>
  </form>
  
  <div class="card-header"> <h4  class="card_data" style="color: white;">Current weather in {{forecast.data[0].city_name}} {{forecast.data[0].country_code}}</h4>
 
  <h4 class="card_data">{{forecast.data[0].weather.description}}</h4>
    
      <br>
      <h1 class="card_data">{{Math.round(forecast.data[0].temp)}} C</h1>
      <br>
      <h4 class="card_data"> wind speed: {{forecast.data[0].wind_spd}} M/S </h4>
      <br>
      <h4 class="card_data"> wind direction: {{forecast.data[0].wind_cdir}}</h4>
      <br>
      <h4 class="card_data"> humidity: {{forecast.data[0].rh}} %</h4>
      <br>
      <h4 class="card_data"> UV index: {{forecast.data[0].uv}}</h4>
     
    </div>
   </div>
  </div>
 
 
</template>

<script>
import API from '../../public/lib/api';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';


export default {
  
  name: 'Home',
    
  data() {
    return {
    forecast : [],
    location: '',
    icon: '',
    
    
    };
    
  },
  mounted() {
    
     this.loadWeather(this.location);

  },
  
   methods : {
    
    loadWeather(location){
    API.getForecast().then(result=> {
    console.log(result)
    this.forecast =result;
    this.icon = this.forecast.data[0].weather.icon
    })
    },
    getIcon(icon){
    return require('../assets/icons/'+icon)
    
},

    updateLocation(){
    console.log(this.location)
    API.getCity(this.location).then(result=> {
    // this.loadWeather(result.data[0].city_name)
    this.forecast =result;
    this.icon= this.forecast.data[0].weather.icon;
    console.log(result)
  })
    }
  }
  // components: {
  //   HelloWorld,
  // },
};
</script>
<style>
.card_data{
  color: white;
 font-family: 'Noto Sans JP', sans-serif;
}

</style>
