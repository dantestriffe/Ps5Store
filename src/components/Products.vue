<template>
  <div class="">
    <section class="hero is-dark is-large x">
      <div class="hero-body">
        <div class="">
          <div style="margin-left: 20em; margin-bottom: 2em;">
            <h1 class="title has-text-weight-light is-size-1">
             Juegos para PS5
            </h1>
            <h4 class="subtitle is-size-5 has-text-weight-light ">
          EL FUTURO DE LOS VIDEOJUEGOS PS5
            </h4>
          </div>
          <div class="is-pulled-left" style="margin-left: 20em;">
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
        </div>
      </div>
    </section>
    <div class="columns is-multiline">
      <div class="column is-4" v-for="p in computedProductList" :key="p.id">
        <!-- Item -->
        <div class="card has-equal-height">
          <div class="image-card">
            <div class="image has-spacing image is-16by9">
              <img  :src="p.data.picture">
            </div>
          </div>
          <div class="card-content">
            <div class="content">
              <h3 class="title">{{ p.data.name }}</h3>
              <p class="subtitle">$ {{ parseInt(p.data.price) }}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada. Donec rutrum congue leo eget malesuada.</p>
              <div class="counter">
                <button @click="decrQty(p.id)" :disabled="p.qty === 1"><i class="mdi mdi-minus"></i></button>
                {{ p.qty }}
                <button @click="incrQty(p.id)"><i class="mdi mdi-plus"></i></button>
              </div>
              <button @click="addToCart(p)" class="button is-pulled-right is-primary">
                <i class="mdi mdi-cart"></i>
              </button>
              <div class="is-clearfix"></div>
            </div>
          </div>
        </div>
      </div> <!-- End Item  -->
    </div>
    <!--  -->
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
    // Pull products from Product service
   /* Products.all().then(response => {
      response.data.forEach(p => {
        p['qty'] = 1
        this.products.push(p)
      })
    })
    .catch(error => {
      alert(error.message)
    })*/
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>

.x{
  background-image: url("../assets/control.webp");
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
}
.hero.is-dark{
  background-color: black;
}

.counter {
  display: inline-block;
  button {
    text-align: center;
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    cursor: pointer;
  }
}
</style>