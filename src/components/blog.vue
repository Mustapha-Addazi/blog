<template>
  <form>
    <div>
      All Posts
    </div>
    <div>
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
</template>

<script>
export default {
  data() {
    return {
        oui:false
    }
  },
   methods: {
    toggleSearch() {
      this.oui = !this.oui;
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
  margin-left: 20%;
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

    border-bottom: 1px solid gray;
}
</style>
