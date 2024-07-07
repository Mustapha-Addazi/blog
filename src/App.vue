<template>
<div class="navbar">  
  <p>LOGO</p>
  <router-link to="discover">Discover</router-link>
  <router-link to="store">Store</router-link>
  <router-link to="blog">Blog</router-link>
  <router-link to="login">Log In</router-link>
  <router-link to="signup">Sign up</router-link>
  <router-link to="contact"> Contact </router-link>
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
  position: fixed;
  padding: 5px;
  height: 10%;
  top: 0px;
  right: 0px;
  left: 0px;
  z-index: 1000;
 }
  a {
    display: flex;
    justify-content: space-around;
    height:90% ;
    padding: 0px 5px;
    width: 25%;
    align-items: center;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    color: antiquewhite;
    font-weight: 20px;
  }
 a.router-link-active {
  background-color: white;
  color: rgb(36, 35, 72);
}

a:hover {
  background-color: rgb(125, 167, 204);
  color: rgb(110, 110, 158);
}

 
</style>