<template>
  <div class="modal" v-bind:class="{'is-active':  showModal}">
    <div class="modal-background "></div>
    <div class="modal-card ">
      <header class="modal-card-head">
        <p class="modal-card-title">Estos son los poductos que añadiste</p>
        <button class="delete is-large" aria-label="close" @click="showModal=false"></button>
      </header>
      <section class="modal-card-body">
        <div>
          <ul>
            <li v-for="p in $store.getters.shoppingCart.list" :key="p.id">
              <div class="card">
                <div class="card-content">
                  <div class="media">
                    <!-- img -->
                    <div class="media-left">
                      <figure class="image is-128x128">
                        <img :src= p.data.picture alt="Placeholder image">
                      </figure>
                    </div>
                    <!-- product -->
                    <div class="media-content">
                      <p class="title is-5">{{ p.data.name }}</p>
                      <p class="subtitle is-4">$ {{ p.data.price * p.qty }}</p>
                    </div>
                    <p>
                      {{ p.qty }} x $ {{ p.data.price }} &nbsp;
                    </p>
                    <button class="button is-danger is-medium" @click="$store.dispatch('removeFromCart', p.id)">
                      <span class="icon is-medium is-left">
                        <i class="mdi mdi-18px mdi-delete"></i>
                        
                      </span>
                      <p>Quitar</p>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <hr>
        <!-- Total -->
        <div>
          <div>
            <div class="is-pulled-right">
              <p class="title is-2">
                Total: $ {{ $store.getters.shoppingCart.total }}
              </p>
            </div>
            <div>
              <button class="button is-medium is-danger" @click="$store.dispatch('clearCart')">
                <i class="mdi mdi-18px mdi-delete"></i>
                Vaciar Carrito
              </button>
            </div>
          </div>
        </div>
        <!-- Content ... -->
      </section>
      <footer class="modal-card-foot ">
        <button class="button is-large is-black" @click="showModal=false">Volver</button>
        <button class="button is-large is-link ">Finalizar Compra</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartDetail',
  components: {},
  props: {},
  data() {
    return {}
  },
  methods: {},
  computed: {
    showModal: {
      get () { return this.$store.getters.showCart },
      set (val) { this.$store.dispatch('updateShowCart', val) }
    },
  },
  watch: {},
  created() {},
  mounted() {}
}
</script>

<style lang="scss" scoped>


</style>