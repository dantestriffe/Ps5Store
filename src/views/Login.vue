<template>
  <div class="bg_l">
    <div class="columns bg_log">
      <div class="column is-2"></div>
      <div class="column is-4 mt">
        <div class="login-container box card">
          <h1 class="title tit">Inicia Sesión</h1>
          <form>
            <!-- Field email -->
            <div class="field">
              <!-- Error -->
              <span v-if="formHasErrors" class="has-text-danger">
                <i class="mdi mdi-alert"></i>
                Usuario o Contraseña incorrectos, Intente nuevamente.
              </span>
            </div>
            <div class="field">
              <label class="label is-medium">Email</label>
              <div class="control has-icons-left has-icons-right">
                <input type="email" name="email" id="email" placeholder="Email"
                v-model="credentials.email"
                class="input is-large">
                <span class="icon is-small is-left">
                  <i class="mdi mdi-email"></i>
                </span>
              </div>
            </div>
            <!-- Field password -->
            <div class="field">
              <label class="label is-medium">Contraseña</label>
              <div class="control has-icons-left has-icons-right">
                <input  type="password" name="password" id="password" placeholder="*******"
                v-model="credentials.password"
                class="input is-large">
                <span class="icon is-medium is-left">
                  <i class="mdi mdi-key"></i>
                </span>
              </div>
            </div>
            <!-- field submit -->
            <div class="field">
              <button class="button is-black is-large is-fullwidth" @click="login">Acceder</button>
            </div>
            <div class="is-clearfix"></div>
          </form>
        </div>
      </div>
      <div class="column is-4">
        <h1 class="title is-2 tit2" style="color: white; font-weight: 200">Inicia Sesión y descubre el <span style="font-weight: strong"> Futuro del gaming</span></h1>
        <h1 class="subtitle is-4" style="color: white; font-weight: 200">Estás a un paso de la nueva generación</h1>
      </div>
      <div class=""></div>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase';


export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {
      credentials: {
        email: '',
        password: ''
      },
      formHasErrors: false
    }
  },
  methods: {
    login(e) { 
      e.preventDefault()
      this.formHasErrors = this.credentials.email === '' || this.credentials.password === ''
      if(!this.formHasErrors) {
        // try login
        Firebase.auth()
              .signInWithEmailAndPassword(
                this.credentials.email,
                this.credentials.password
              )
              .then(() => {
                let user = this.credentials.email
                this.$store.dispatch('updateUser', user)
                this.$router.push('/home')
        })
        .catch(() =>{
          console.log('usuario no encontrado')
        })
      }
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {}
}
</script>

<style lang="scss" scoped>


.mt{
  margin-top: 9rem;
}
.bg_log{
  background-image: url("../assets/bg_logim-01.jpg");
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 980px;

}

.tit{
  text-align: center;
  margin-bottom: 3rem;
}

.tit2{
  margin-top: 300px;
  margin-bottom: 30px;
}

.button{
  margin-top: 40px;
}

.login-container {
  padding-top: 4rem;
    min-height: 550px;
    max-width: 80%;
  
}
</style>