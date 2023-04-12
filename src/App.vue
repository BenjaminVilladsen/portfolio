<template>
<div>
  <nav>
      <div class="links">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/projects">Projects</router-link>
        <router-link to="/contact">Contact</router-link>
    </div>
  </nav>
  <router-view/>
</div>
</template>

<style>

  body{
    margin: 0;
    padding: 0;
    background: #f5f5f5;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.links{
  justify-content: space-around;
  align-items: center;
}

nav {
  background: white;
  padding: 30px;
}

nav a.router-link-exact-active {
  color: #000000;
  font-size: 1.2em;
}

nav a {
  margin: 10px;
  border-radius: 20px;
  background: transparent;
  padding: 15px;
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
  transition: all 0.3s ease;
}
nav a:hover{
  border-radius: 0px;
  color: white;
  background: #2c3e50;

  transition: all 0.3s ease;

}

</style>
