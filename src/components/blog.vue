<template>
  <form>
    <div>
      All Posts
    </div>
    <div >
      Most Reader
    </div>
    <div>
      Most Liked
    </div>

  <div class="search" >
    <p v-show="!oui" @click="toggleSearch">
      <ion-icon name="search-outline"></ion-icon>
    </p>
    <div v-show="oui" class="search-container">
      <div><ion-icon name="search-outline"></ion-icon></div>
      <input type="text" placeholder="Search" />
      <div @click="toggleSearch"><ion-icon name="close-outline"></ion-icon></div>
    </div>
  </div>
  </form>
  <section class="unified-container">
  <img :src="article1" alt="article1"  width="50%" height="100%" /> 
  <article class="content">
    <div class="info">
    <div class="profile">
    <img :src="profile1" alt="profile"/>
    </div>
    <div class="info1">
    <p >{{ username }}</p><span id="dots" @click="share"><ion-icon name="ellipsis-vertical"></ion-icon></span>
    <p >{{ currentdate }} . {{currenttime}}</p> 
    </div>
    </div>
    <div class="share" v-show="shar">
      <ion-icon name="arrow-redo-outline"></ion-icon>
    <input type="submit" value="Share Post">
    </div>
  </article>
  </section>
</template>

<script>
import article1 from '@/assets/article1.webp';
import profile1 from '@/assets/profile1.jpg'
export default {
  data() {
    const now = new Date();
    const currentdate= now.toLocaleDateString();
    const currenttime= now.toLocaleTimeString();
    return {
        oui:false,
        shar:false,
        article1,
        username:"khalid kidarine",
        profile1,
        currentdate,
        currenttime
    }
  },
   methods: {
    toggleSearch() {
      this.oui = !this.oui;
    },
    share(){
       this.shar= !this.shar;
    }
  }
  }
</script>

<style scoped>
form {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 60%;
  height: 50px;
  padding: 5px;
  align-items: center;
  margin-left: 10%;
}
div {
  display: block;
  width: 100px;
  padding: 5px;
}
div:hover {
  cursor: pointer;
  color: rgb(23, 179, 153);
}
.search-container{
    display: flex;
    flex-direction: row;
}
input[type=text]{
    outline: none;
    border: none;
    border-bottom: 1px solid gray;
}
.unified-container{
  border: 1px solid gray;
  display: flex;
  width: 70%;
  height: 500px;
  margin-left: 15%;
  padding: 0%;
  cursor: pointer;
}
.article{
  float: right;
}
.profile{
  border: 5px solid #fff;
  border-radius:50% ;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
}
.profile img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.content{
  width: 50%;
}
.info{
  display: flex;
  flex-direction: row;
  width: 97%;
  height: 65px;
}
.info1{
  width: 70%;
  height: 80%;
  margin-left:5px ;
  margin-top: -7px;
  padding: 0%;
}
#dots{
  float: right;
  margin-top:-10px ;
}
.share{
  width: 60%;
  height: 40px;
  background-color: aqua;
  margin-left:100px ;
  border: 2px solid white;
  box-shadow: 2px 2px 10px black;
  padding-top:6px ;
}
</style>
