<script>
  import { store } from '../data/store';
  import axios  from 'axios';
  export default {
    name: 'ProjectDetail',

    data(){
      return{
        store
      }
    },

    methods:{
      getApi(){
        const slug = this.$route.params.slug;
        axios.get(store.apiUrl + 'projectbyslug/' + slug)
            .then(result =>{
              store.project = result.data.project
              console.log(store.project);
            })
            .catch(error =>{
              console.log(error.message);
            })
      }
    },
    mounted(){
      this.getApi();
    }
  }
</script>

<template>
  <div class="row">
    <div class="col project">
      <div class="title text-uppercase mb-5">
        <h1>{{ store.project.title }}</h1>
        <img :src="store.project.image" :alt="store.project.title">
      </div>
      <div class="info">
        <a :href="store.project.href">View project</a>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .project{

    img{
      max-width: 100%;
    }
    a{

      text-decoration: none;
      cursor: pointer;
    }
  }
</style>