<script>
  import {store} from './data/store';
  import axios from 'axios';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';
  import Paginator from './components/partialsMain/Paginator.vue';

  export default {
      components:{
        Header,
        Main,
        Footer,
        Paginator
      },
      data(){
        return{
          axios,
          store
        }
      },
      methods:{
        getApi(){
          axios.get(store.apiUrl),{
            params: this.store.queryParam
          }
            .then(result =>{
              store.projects = result.data.data;
              console.log(result.data.data);
            })
            .catch(error =>{
              error = error.message
            })
        }
      },
      mounted(){
        this.getApi();
      }

  }
</script>


<template>
  <Main />
  <Paginator @nextPage="getApi" />
</template>


<style lang="scss">
@use './assets/scss/main.scss'

</style>