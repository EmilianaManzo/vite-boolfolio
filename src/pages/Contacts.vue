<script>
import { store } from '../data/store';
import axios from 'axios';
import Loader from '../components/partialsGeneric/Loader.vue';
  export default {
    name : 'Contacts',
    components:{
      Loader
    },
    data(){
      return{
        name: '',
        email: '',
        message: '',
        sending: false,
        sent: false,

        errors:{
          name: [],
          email: [],
          message: []
        }
      }
    },
    methods:{
      sendEmail(){
        this.sending = true
        const data = {
          name: this.name,
          email: this.email,
          message: this.message,
        }

        axios.post(store.apiUrl + 'send-email', data)
            .then(result =>{
              this.sending = false ;
              this.sent = result.data.success;

              if(!result.data.success){
                this.errors = result.data.errors;
              }else{
                this.errors = {
                  name: [],
                  email: [],
                  message: []
                }
              }
              console.log(result.data.errors);
            })
            .catch(error =>{
              this.sending = false;
              console.log(error.message);
            })
        
        console.log(data);
      }
    }
  }
</script>
<template>
  <div class="row">
    <div class="col">
      <h1>Contatti</h1>
      <div class="form" v-if="!sending">
        <form @submit.prevent="sendEmail" v-if="!sent" >
          <div>
            <label for="name" class="form-label">Nome</label>
            <input class="form-control mb-3" v-model="name" type="text" name="name" id="name">
            <p class="error text-danger">{{ errors.name?.toString()}}</p>
          </div>

          <div>
            <label for="email" class="form-label">Email</label>
            <input class="form-control mb-3" type="email" v-model="email" name="email" id="email">
            <p class="error text-danger">{{ errors.email?.toString()}}</p>

          </div>

          <div>
            <label for="message" class="form-label">Messaggio</label>
            <textarea class="form-control mb-3" v-model="message" name="message" id="message"></textarea>
            <p class="error text-danger">{{ errors.message?.toString()}}</p>

          </div>
          <div>
            <button type="submit" class="btn btn-primary">Invia</button>
          </div>
        </form>
        <h6 v-else>Email inviata correttamente</h6>

      </div>
      <Loader v-else/>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>