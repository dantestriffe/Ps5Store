<template>
  <div class="bgpage">
    <section class="hero is-dark is-large x">
      <div class="hero-body">
        <div class="container">
          <img class="ima" src="../assets/logo3-01.png" alt="">
          <div style="margin-bottom: 2em;">
            <h1 class="title has-text-weight-bold is-size-1">
              Descubre lo último en Juegos para PS5
            </h1>
            <h4 class="subtitle is-size-3 has-text-weight-light ">
              El <span class="has-text-weight-bold">FUTURO</span> de los videojuegos ha llegado
            </h4>
            <button class="button is-large is-light "><a href="#anch">Descubre los mejores juegos</a></button>
          </div>         
        </div>
      </div>
    </section>
      <div class="container">
        <img class="ofer" src="../assets/ofer.jpg" alt="">
        <h1 id="anch" class="title is-size-2" style="margin-top: 2em; color: white" >
          Nuevos juegos destacados para PlayStation®5
        </h1>
        <h1 class="subtitle is-size-4" style="color: white; margin-top: 1em">
          ¿Buscas una aventura increíble para jugar hoy mismo? Estos fantásticos juegos para la consola PS4 ya están disponibles. Haz clic en un juego para obtener más información y, luego, descárgalo de forma digital o solicita que te lo enviemos directamente a tu domicilio.
        </h1>
        <h1 class="subtitle is-size-4" style="color: cyan;"> Busca tu Juego Favorito </h1>      
          <div class="is-pulled-left">
            <div class="field">
              <p class="control has-icons-left">
                <input class="input is-large is-focused is-rounded" type="text" placeholder="Busca tu Juego" v-model="search">
                <span class="icon is-large is-left">
                  <i class="mdi mdi-magnify"></i>
                </span>
              </p>
            </div>
            <!--  -->
          </div>
          <br>
        </div>
    <div class="container">
    <div class="columns is-multiline" style="margin-top: 4em;">     
      <div class="column is-3" v-for="p in computedProductList" :key="p.id">
        <!-- Item -->
        <div class="card has-equal-height cardbg">
          <div class="image-card">
            <div class="image is-4by3">
              <img  :src="p.data.picture">
            </div>
          </div>
          <div class="card-content">
            <div class="content">
              <h3 class="title">{{ p.data.name }}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <div class="counter title" style="display: flex; justify-content: space-around">
                <button @click="decrQty(p.id)" :disabled="p.qty === 1"><i class="mdi mdi-minus"></i></button>
                {{ p.qty }}
                <button @click="incrQty(p.id)"><i class="mdi mdi-plus is-black"></i></button>
              <p class="title">$ {{ p.data.price * p.qty }}</p>
              </div>
              <button @click="addToCart(p)" class="button is-large is-fullwidth is-black is-rounded" style="margin-top: 2rem">
                <i class="mdi mdi-cart">Enviar al carrito</i>
              </button>
              <div class="is-clearfix"></div>
            </div>
          </div>
        </div>
      </div> <!-- End Item  -->
    </div>
    <!--  -->
      </div>
      </div>

</template>

<script>
import {mapState} from 'vuex';

export default {
  components: {},
  props: {},
  data() {
    return {
      search: '',
    }
  },
  methods: {
    incrQty(id) {
      let idx = this.products.map(p => p.id).indexOf(id)
      this.products[idx].qty++
    },
    decrQty(id) {
      let idx = this.products.map(p => p.id).indexOf(id)
      // console.log('decr on ', this.products[idx])
      if(this.products[idx].qty > 1) {
        this.products[idx].qty--
      }
    },
    addToCart(product) {
      // push a copy of product to the cart
      let p = JSON.parse(JSON.stringify(product))
      this.$store.dispatch('addToCart', p)
      // reset qty
      product.qty = 1
    }
  },
  computed: {
    ...mapState(['products']),
    computedProductList() {
      return this.products.filter(p => {
        return p.data.name.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  watch: {},
  created() {
    this.$store.dispatch('getProducts')
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>

a{
  color: #202020;
}

.bgpage{
  background: rgb(8, 8, 8);
  padding-bottom: 10rem;
}
.ofer{
  margin-top: 6rem;
  width: 100%;
}
.ima{
  width: 22%;
}
.col{
  margin-left: 3rem;
  margin-right: 3rem;
}
.cardbg{
  background-color: white;
}
.x{
  background-image: url("../assets/logo5-01.png");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
}
.hero.is-dark{
  background-color: black;
}
.counter {

  button {
    background: rgb(34, 34, 34);
    color: white;
    border-radius: 15%;
    text-align: center;
    height: 3rem;
    width: 3rem;
    cursor: pointer;
  }
}
</style>