<script>
  import {store} from './data/store';
  import axios from 'axios';
  import Header from './components/Header.vue';
  import Main from './components/Main.vue';
  import Footer from './components/Footer.vue';

  export default {
      components:{
        Header,
        Main,
        Footer,
      },
      data(){
        return{
          axios,
          store
        }
      },
      methods:{
        getApi(){
          axios.get(store.apiUrl)
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
  <div>
    <h1>hello</h1>
  </div>
</template>


<style lang="scss">
@use './assets/scss/main.scss'

</style>