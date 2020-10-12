<template>
  <div id="app">
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary justify-content-center">
  <a class="navbar-brand" href="#" style="font-family: 'Knewave', cursive; font-size: 30px;">Weather App </a>
  <i class="fas fa-sun" style="font-size: 40px;"></i>
 </nav>\ <main class="container mt-2">
 <router-view/>
    </main>
    <footer>
      <div class="footer"><p style="text-align: left; color:white;">Made by Bakyt Kurmanov</p></div>
    </footer>
  </div>
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
