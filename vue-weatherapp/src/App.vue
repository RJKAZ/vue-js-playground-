<template>
  <div id="app">
    <main>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search..."/>
        <div class="test" id="yes"></div>
      </div>
      </main>
    </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      api_key: '5ad7609cdd6f496811e17c9efa382b4a'
    }
  }
}

// left off at 7:13

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'montserrat', sans-serif;
}

#app {
  background-image: url('./assets/cold-bg.jpg');
  background-size: cover; 
  background-position: bottom;
  transition: 0.4s;
}

main {
  min-height: 100vh;
  padding: 25px;
}

</style>
