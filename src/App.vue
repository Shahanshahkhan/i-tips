<script setup>
import { RouterView } from 'vue-router';
// import header from './components/header.vue';
import Header from './components/header.vue';
import Side from './components/side.vue';
</script>







<template>

  <div>
    <Header />
  </div>
  <Side /> 
  <RouterView />
</template>



























<style scoped></style>