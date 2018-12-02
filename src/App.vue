<template>
  <div id="app">
    <!-- 阴影遮罩 -->
    <div class="cover">
      <Header></Header>
      <Todo></Todo>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./todolist/header";
import Footer from "./todolist/footer";
import Todo from "./todolist/todo";
export default {
  name: "App",
  components: {
    Header,
    Footer,
    Todo
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  width: 100%;
  height: 100%;
}
body {
  font-size: 300;
  background-image: url("assets/bg1.jpg");
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
<style scoped>
.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(102, 102, 102, 0.6);
  z-index: -1;
}
</style>
