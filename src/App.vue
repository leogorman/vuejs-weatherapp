<template>
  <div id="app">
    <Header />
    <Search v-on:search-weather="searchWeather" />
    <Info v-bind:info="info" />
  </div>
</template>

<script>
  import Header from "./components/layout/Header";
  import Search from "./components/Search";
  import Info from "./components/Info";
  import axios from "axios";

  const apiKey = '';

  export default {
    name: 'App',
    components: {
      Header,
      Search,
      Info
    },
    data(){
      return{
        info: null
      }
    },
    methods:{
      searchWeather(city){
        if (localStorage.getItem('info' + city)) {
          try {
            this.info = JSON.parse(localStorage.getItem('info'+ city));
          } catch(e) {
            localStorage.removeItem('info'+ city);
          }
        }

        if(this.info != null){
          // Local storage available, check using city name
          if(this.info.name === city){
            // Already stored locally, do nothing
          } else{
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
                    .then((result) => {
                      this.info = result.data
                      this.info.url = "http://openweathermap.org/img/wn/" + result.data.weather[0].icon + ".png"

                      const parsed = JSON.stringify(this.info);
                      localStorage.setItem('info'+ city, parsed);
                    })
                    .catch(err => console.log(err))
          }
        } else{
          //Local storage unavailable, search api
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
                  .then((result) => {
                    this.info = result.data
                    this.info.url = "http://openweathermap.org/img/wn/" + result.data.weather[0].icon + ".png"

                    const parsed = JSON.stringify(this.info);
                    localStorage.setItem('info'+ city, parsed);
                  })
                  .catch(err => console.log(err))
        }

      }
    }
  }
</script>

<style>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body{
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.4;
  }
</style>
