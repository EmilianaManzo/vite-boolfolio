<script>
  import { store } from '../data/store';
  import ProjectCard from './partialsMain/ProjectCard.vue';

  export default {
      components:{
        ProjectCard
      },
      data(){
        return{
          store
        }
      }
  }
</script>

<template>
  <div class="row row-col-4" >

        <ProjectCard
            v-for="project in store.projects"
            :key="project.id"
            :title="project.title"
            :href="project.href"
            :desc="project.description"
            :type="project.type.name"

          />
          <!-- tecnology non so come passarlo -->
  </div>
  
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss'
</style>