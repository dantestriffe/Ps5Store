<template>
<footer class="footer" style="background: black; padding-top: 8rem;">
  <div class="content has-text-centered">
      <router-link class="title" to="/"> {{ brand }}</router-link>
      <p>Created by <a href="https://github.com/dantestriffe">  Dannycreative  - </a>
      <router-link to="/">Home</router-link>  -  
      <router-link to="/login">Login</router-link>  -  
      <router-link to="/create">Agregar Productos</router-link>
    </p>
  </div>
</footer>
  
</template>

<script>
export default {
    name: 'Footer',
    props:{
        brand: {
            type: String,
            default: 'Playstation5 Store',
        }
    }
}
</script>

<style>

footer{
    color: blanchedalmond;
    background: blue;
}

</style>