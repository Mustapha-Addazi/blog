<template>
<div class="navbar">  
  <p>LOGO</p>
  <router-link to="discover">Discover</router-link>
  <router-link to="store">Store</router-link>
  <router-link to="blog">Blog</router-link>
  <router-link to="/login">Log In</router-link>
  <router-link to="/signup">Sing up</router-link>
  <router-link to="/contact"> Contact </router-link>
</div>
  <hr>
  <div>
    <router-view></router-view>
  </div>
 
</template>
<style scoped>
 .navbar{
  display: flex;
  justify-content: space-around;
  background-color: rgb(10, 10, 58);

 }
  a {
    display: inline-block;
    font-family: Arial, Helvetica, sans-serif;
    padding: 5px;
    margin: 10px;
    text-decoration: none;
    padding: 1%;
    color: antiquewhite;
    font-weight: 20px;
  }
 a.router-link-active {
  background-color: white;
  color: rgb(36, 35, 72);
}

a:hover {
  background-color: aliceblue;
  color: rgb(110, 110, 158);
}

 
</style>