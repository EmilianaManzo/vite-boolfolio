<script>
  import { store } from '../data/store.js';
  import axios from 'axios';
  import ProjectCard from '../components/partialsMain/ProjectCard.vue';
  export default {
    name : 'Projects',
    components:{
        ProjectCard
      },
      data(){
        return{
          store,
          axios
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
    <div class="row text-center">
      <h1 class="">Progetti</h1>
    </div>
    <div class="row row-col-4" >

    <ProjectCard
        v-for="project in store.projects"
        :key="project.id"
        :title="project.title"
        :href="project.href"
        :desc="project.description"
        :type="project.type.name"
        :tecnologies="project.tecnologies"

      />
      <!-- tecnology non so come passarlo -->


    </div>
</template>


<style lang="scss" scoped>

</style>