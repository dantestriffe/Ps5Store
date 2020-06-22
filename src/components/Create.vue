<template>
    <div class="bg_add">
        <div class="container box">
       <h1 class="title titled">Agregar Productos</h1>
         <div class="field columns">    
            <div class="control column is-3">
               <label class="label">Ingrese Nombre del Producto</label>
               <input type="text" class="input is-large" v-model="name" placeholder="Ingrese Producto"><br>
                </div>
              <div class="control column is-2">
                 <label class="label">Ingrese el Precio $</label>
                <input type='number'  class="input is-large" v-model="price" placeholder='ingrese el valor $'><br>
             </div>
             <div class="control column is-4">
                <label class="label">Adjunte el url de la Imagen del Producto</label>
                <input type="text"  class="input is-large" v-model="picture" placeholder="Ingrese foto del Producto"><br> 
             </div>  
             <div class="controls"> 
                <button class="button is-link is-medium" @click="createProducts"><i class="mdi mdi-plus-circle-outline"> Añadir </i></button>
                
                <button class="button mrg is-medium is-black" v-if="edit" @click="updateProduct(id)"><i class="mdi mdi-refresh"> Actualizar </i></button>
             </div>    
          </div>
        </div>

        <table class="table table-striped container box">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Nombre del Producto</th>
                    <th>Precio</th>
                    <th>Imagen</th>
                    <th colspan="2" class="action">Acción</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="p in computedProductList" :key="p.id">
                 <td>{{ p.id }}</td>
                 <td>{{ p.data.name }}</td>
                 <td>{{ p.data.price }}</td>
                 <td> {{ p.data.picture}}</td>
                 <td>
              <button class="button btn-success" @click="editProduct(p.id)">Editar</button>
              </td>
              <td>
                  <button class="button btn-danger" @click="deleteProduct(p.id)" >Borrar</button>
                  <span class="icon has-text-danger">
                     <i class="fas fa-ban"></i>
                     </span>
              </td>
              </tr>
            </tbody>   
        </table>
  
 </div>    
</template>
<script>
import axios from 'axios'
import { mapState, mapActions } from 'vuex'

export default {
    data (){
        return{
            name:'',
            picture: '',
            price: '',
            id: undefined
        }
    },
    methods:{
         ...mapActions(['updateEdit']),
        createProducts(){
            let go = {
                name: this.name,
                picture: this.picture,
                price: this.price
            }
            axios.post('https://us-central1-tddg3-72011.cloudfunctions.net/products/Product', go,
            {headers:{'content-type':'application/json'}})
            .then((response) =>{
                console.log(response);
                this.$store.dispatch('getProducts')
            })
            .catch((error) =>{
                console.log(error);
            });
         },
        deleteProduct(id){    
            axios.get(`https://us-central1-tddg3-72011.cloudfunctions.net/products/Product/${id}`).then((response)=>{
            let names = response.data.name           
            let confirmation = confirm(`Vas a eliminar el Producto ${names}`)       
            if(confirmation){
                axios.delete(`https://us-central1-tddg3-72011.cloudfunctions.net/products/Product/${id}`,
                 {headers:{'content-type':'application/json'}}) 
                 .then(() =>{
                     alert('Producto Eliminado')
                   this.$store.dispatch('getProducts')  
                 })
            }
            })
        },
        editProduct(id){
           this.updateEdit()
           this.findProduct(id)    
        },
        findProduct(id){
             axios.get(`https://us-central1-tddg3-72011.cloudfunctions.net/products/Product/${id}`,
                 {headers:{'content-type':'application/json'}}) 
            .then((response) =>{
                this.name = response.data.name
                this.picture = response.data.picture
                this.price = response.data.price
                this.id = id 
            })
        },
        updateProduct(id){
            let go = {
                name: this.name,
                picture: this.picture,
                price: this.price
            }
            console.log (go)
            axios.put(`https://us-central1-tddg3-72011.cloudfunctions.net/products/Product/${id}`, go,
            {headers:{'content-type':'application/json'}})
            .then(() =>{
                this.name = ''
                this.picture = ''
                this.price = ''
                this.$store.dispatch('getProducts')
            })
            .catch((error) =>{
                console.log(error);
            });
        }
    },
    computed:{
     ...mapState(['products', 'edit']),
      computedProductList(){
        return this.products
        },    
    },
    mounted(){
        this.$store.dispatch('getProducts')
    },
}
</script>
<style scoped>


.mrg{
    margin-left: 20px;
}

.controls{
    margin-top: 48px;
}

.titled{
    text-align: center;
}
.bg_add{
    padding-top: 100px;
    background: black;
}

input{
    margin-bottom: 1em;
}
h1{
    color: #00d1b2,
}
</style>