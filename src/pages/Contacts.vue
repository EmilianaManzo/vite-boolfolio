<script>
import { store } from '../data/store';
import axios from 'axios';
  export default {
    name : 'Contacts',
    data(){
      return{
        name: [],
        email: [],
        message: [],
      }
    },
    methods:{
      sendEmail(){
        const data = {
          name: this.name,
          email: this.email,
          message: this.message,
        }

        axios.post(store.apiUrl + 'send-email', data)
            .then(result =>{
              console.log(result.data);
            })
            .catch(error =>{
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
      <div class="form">
        <form @submit.prevent="sendEmail" >
          <div>
            <label for="name" class="form-label">Nome</label>
            <input class="form-control mb-3" v-model="name" type="text" name="name" id="name">
          </div>

          <div>
            <label for="email" class="form-label">Email</label>
            <input class="form-control mb-3" type="email" v-model="email" name="email" id="email">
          </div>

          <div>
            <label for="message" class="form-label">Messaggio</label>
            <textarea class="form-control mb-3" v-model="message" name="message" id="message"></textarea>
          </div>
          <div>
            <button type="submit" class="btn btn-primary">Invia</button>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>