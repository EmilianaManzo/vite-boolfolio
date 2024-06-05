<script>
  import { store } from '../data/store';
  import axios from 'axios';
  export default {
    name: 'TecnologiesProjects',
    data(){
      return{
        store,
        
      }
    },
    methods:{
      getApi(slug){
        axios.get(store.apiUrl + 'tecnologiesproject/' + slug)
            .then(result=>{
              console.log(result.data);
              store.tecnologyName = result.data.name;
              store.projects = result.data.projects;
            })
            .catch(error=>{
              console.log(error.message);
            })
      }
    },
    mounted(){
      this.getApi(this.$route.params.slug)
    }

  }
</script>
<template>
  <div>
    <h1 class="mb-2">Progetti per il tipo: {{ store.tecnologyName }}</h1>
    <ul>
      <li v-for="project in store.projects" :key="project.id">{{ project.id }} - <router-link :to="{name:projectDetail , params:{slug: project.slug}}" class="text-uppercase">{{ project.title }}</router-link></li>
    </ul>
  </div>
</template>


<style lang="scss" scoped>

</style>