<template>
  <div id="app">
    <Header />
    <HeaderMenu />
    <ModalBackCall />
    <router-view />
  </div>
</template>
<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Header from "./components/Header.vue";
import HeaderMenu from "./components/HeaderMenu.vue";
import ModalBackCall from "./components/ModalBackCall.vue";
export default {
  components: {
    Header,
    HeaderMenu,
    ModalBackCall,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/_variable.scss";

html {
  font-size: 10px;
}
body {
  font-size: 16px;
  padding: 0;
  background: #000;
}
#app {
  height: 300vh;
}
.text-gold {
  transition: $transition;
  &:hover {
    color: $colorGold;
  }
}
.img-hover {
  > img {
    transition: $transition;
  }
  &:hover > img {
    transform: scale(0.9);
  }
  &:active {
    animation: scale 0.3s;
  }
  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
}
.btn-hover {
  transition: $transition;
  border: none;
  border-color: none;
  box-shadow: none;
  outline: none;
  &:hover {
    color: inherit;
    background: $colorGoldLite;
  }
  &:focus {
    color: inherit;
  }
}
*button,
*a {
  &:focus,
  &:active {
    border-color: none !important;
    box-shadow: none !important;
    outline: none !important;
  }
}
</style>
