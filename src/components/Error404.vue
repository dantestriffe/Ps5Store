<template>
  <section class="hero is-black is-fullheight">
  <div class="hero-body">
    <div class="container">
      <h1 class="title is-1">
        Error 404
      </h1>
      <h2 class="subtitle is-2">
       No pudimos encontrar tu pagina X_X
      </h2>
      <button class="button is-large is-light "><router-link to="/" class="jd"> volver a la Tienda</router-link></button>
    </div>
  </div>
</section>
</template>

<script>
export default {
    data() {
  }

}
</script>

<style>

.jd{
    color: #202020;
}

.hero{
    background-image: url('../assets/bg_404.jpg');
    background-position: center;
    background-size: cover;
}

</style>