<template>
  <div id="app">
    <navbar :brand="'Playstation 5 Store'"/>
    <div class="modal" :class="{'is-active' : charge}">
      <div class="modal-background"></div>
      <div class = "modal-content">
       <div class="animated"></div>
      
      </div>

    </div>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import { mapState } from 'vuex'


export default {
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapState(['charge'])
  }
}
</script>


<style >

html{
  scroll-behavior: smooth;
}

.animated{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(255, 255, 255);
  position: relative;
  animation-name: loader;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes loader {
  0%   {background-color:rgb(255, 255, 255); left:100px; top:0px;}
  25%  {background-color:rgb(204, 204, 204); left:500px; top:0px;}
  50%  {background-color:rgb(175, 175, 175); left:300px; right:300px;}
  75%  {background-color:rgb(87, 87, 87); left:0px; right:300px;}
  100% {background-color:rgb(29, 29, 29); left:0px; right:0px;}
}

</style>
