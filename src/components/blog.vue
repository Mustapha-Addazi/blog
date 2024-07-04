<template>
  <form>
    <div >
      All Posts
    </div>
    <div >
      Most Readed
    </div>
    <div >
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
    <p class="name">{{ username }}</p><span id="dots" @click="share"><ion-icon name="ellipsis-vertical"></ion-icon></span>
    <p class="date" >{{ currentdate }} . {{currenttime}}</p> 
    </div>
    </div>
    <div class="share" v-show="shar">
      <ion-icon name="arrow-redo-outline"></ion-icon>
      <input type="submit" value="Share Post">
    </div>
    <h1 class="title">  {{title}}    </h1>
    <p class="introduction">{{introduction}}</p>

    <div class="footer">
      <hr>
      <div class="interaction">
    <p>{{views}} views</p> <p>{{comment}} comments</p><p>{{likes}} <ion-icon @click="like" v-show="liked" name="heart-outline"></ion-icon><ion-icon @click="like" v-show ="!liked" name="heart"></ion-icon></p> 
      </div>
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
        isHovered:false,
        article1,
        username:"khalid kidarine",
        profile1,
        currentdate,
        currenttime,
        title:'Exploring the Multilayered Surface Finishing of Futuristic "Obsidian" Rocks',
        introduction:'Take an up-close look at the surface finishing of the futuristic "Obsidian," achieved through multiple layers of paint with varying...',
        views:200,
        comment:20,
        likes:34,
        liked:false
    }
  },
   methods: {
    toggleSearch() {
      this.oui = !this.oui;
    },
    share(){
       this.shar= !this.shar;
    },
    like(){
      if(this.liked){
        this.likes +=1;
      }else{
        this.likes -=1;
      }
    this.liked = !this.liked;
    }
  }
  }
</script>

<style scoped>
:root {
  --hovered-color: rgb(23, 179, 153);
}

form {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 80%; 
  height: 50px;
  padding: 5px;
  align-items: center;
  margin-left: 10%; 
  transition: cursor 0.3s;
  cursor: default;
}

form > div:hover,.name:hover,#dots:hover,
.title:hover{
  cursor: pointer;
  color: rgb(23, 179, 153)
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

.unified-container {
  border: 1px solid gray;
  display: flex;
  width: 70%;
  height: 500px;
  margin-left: 15%;
  padding: 0%;
}
.unified-container >img{
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
  cursor: pointer;
}
.profile img{
  object-fit: cover;
  width: 100%;
  height: 100%;
}
.content{
  width: 50%;
  padding-left: 25px;
  padding-top: 10px;
  position: relative;
}
.info{
  display: flex;
  flex-direction: row;
  width: 97%;
  height: 50px;
}
.info1{
  width: 80%;
  height: 100%;
  margin-left:5px ;
  margin-top: -15px;
}
.name{
  width: 30%;
}

#dots{
  float: right;
  margin-top:-10px ;
}
.share{
  width: 35%;
  height: 40px;
  margin-left:200px ;
  border: 2px solid white;
  box-shadow: 2px 2px 10px black;
}
.share input{
  font-size: 18px;
  background-color: #fff;
  border: none;
  margin-right: 7px;
  cursor: pointer;
  }
.share ion-icon{
  font-size: 30px;
  margin-bottom: -5px;
  margin-left: 2px;
}
.footer{
  margin-bottom: 5px;
  width: 90%;
  height: 10%;
  position:absolute;
  bottom: 10px;
  left: 20px;
  padding-bottom: 5px;
}
.interaction {
  display: grid;
  grid-template-columns: 1fr 2fr auto; 
  align-items: center; 
  font-size: 18px;
}
.interaction p:nth-child(2):hover{
  color: rgb(23, 179, 153);
  cursor: pointer;
}
.interaction p:nth-child(3) {
  justify-self: end; 
}
.interaction p:nth-child(3) >ion-icon {
  color: red;
  cursor: pointer;
}
</style>
