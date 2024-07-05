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
  <section v-for="(article,index) in articles" :key="index" class="unified-container">
  <img :src="article2" alt="article"  width="50%" height="100%" /> 
  <article class="content">
    <div class="info">
    <div class="profile">
    <img :src="profile" alt="profile"/>
    </div>
    <div class="info1">
    <p class="name">{{ article.username }}</p><span id="dots" @click="share(index)"><ion-icon name="ellipsis-vertical"></ion-icon></span>
    <p class="date" >{{ article.currentdate }} . {{article.timeread}} </p> 
    </div>
    </div>
    <div class="share" v-show="article.shar">
      <ion-icon name="arrow-redo-outline"></ion-icon>
      <input type="submit" value="Share Post">
    </div>
    <h1 class="title">  {{article.title}}    </h1>
    <p class="introduction">{{article.introduction}}</p>

    <div class="footer">
      <hr>
      <div class="interaction">
    <p>{{article.views}} views</p> <p>{{article.comment}} comments</p><p>{{article.likes}} <ion-icon @click="like(index)" v-show="article.liked" name="heart-outline"></ion-icon><ion-icon @click="like(index)" v-show ="!article.liked" name="heart"></ion-icon></p> 
      </div>
    </div>
  </article>
  </section>
</template>

<script>
import article1 from '@/assets/article1.webp';
import profile from '@/assets/profile1.jpg';
import article2 from '@/assets/article2.jpg';
export default {
  data() {
    const now = new Date();
    const currentdate= now.toLocaleDateString();
  return {
    oui:false,
    isHovered:false,
    profile,
    article1,
    article2,
    articles: [
      { 
        shar:false,
        liked:false,
        username: "khalid kidarine",
        currentdate,
        timeread: "1 min",
        title: 'Exploring the Multilayered Surface Finishing of Futuristic "Obsidian" RocksExploring the Multilayered Surface Finishing of Futuristic "Obsidian" Rocks',
        introduction: 'Take an up-close look at the surface finishing of the futuristic "Obsidian," achieved through multiple layers of paint with varying...',
        views: 200,
        comment: 20,
        likes: 34
      },
      { shar:false,
        liked:false,
        article: 'article2',
        username: "another user",
        profile: 'profile2',
        currentdate,
        timeread: "2 min",
        title: 'Another fascinating article title',
        introduction: 'This is the introduction to another fascinating article...',
        views: 150,
        comment: 10,
        likes: 25
      },
      {shar:false,
        liked:false,
        article: 'article3',
        username: "user three",
        profile: 'profile3',
        currentdate,
        timeread: "3 min",
        title: 'The Wonders of Modern Architecture',
        introduction: 'An insight into the modern architectural marvels...',
        views: 300,
        comment: 15,
        likes: 40
      },
      {shar:false,
        liked:false,
        article: 'article4',
        username: "user four",
        profile: 'profile4',
        currentdate,
        timeread: "4 min",
        title: 'Understanding Quantum Computing',
        introduction: 'A deep dive into the complexities of quantum computing...',
        views: 400,
        comment: 25,
        likes: 50
      },
      {shar:false,
        liked:false,
        article: 'article5',
        username: "user five",
        profile: 'profile5',
        currentdate,
        timeread: "5 min",
        title: 'Advancements in Artificial Intelligence',
        introduction: 'Exploring the recent advancements in AI technology...',
        views: 500,
        comment: 30,
        likes: 60
      },
      {shar:false,
        liked:false,
        article: 'article6',
        username: "user six",
        profile: 'profile6',
        currentdate,
        timeread: "6 min",
        title: 'The Future of Space Exploration',
        introduction: 'Looking ahead to the future of space travel and exploration...',
        views: 600,
        comment: 35,
        likes: 70
      }
    ]
  }
},
   methods: {
    toggleSearch() {
      this.oui = !this.oui;
    },
    share(index){
       this.articles[index].shar= !this.articles[index].shar;
    },
    like(index){
      if(this.articles[index].liked){
        this.articles[index].likes ++;
      }else{
        this.articles[index].likes --;
      }
    this.articles[index].liked = !this.articles[index].liked;
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
  margin-bottom: 35px;
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
