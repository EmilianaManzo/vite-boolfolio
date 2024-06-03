<script>
  import { store } from '../data/store.js';
  import axios from 'axios';
  import ProjectCard from '../components/partialsMain/ProjectCard.vue';
  
  import Loader from '../components/partialsGeneric/Loader.vue';
  export default {
    name : 'Projects',
    components:{
        ProjectCard,
        Loader
      },
      data(){
        return{
          store,
          axios,
          loading :true
        }
      },
      methods:{
        getApi(type = ''){
          this.loading = true
          axios.get(store.apiUrl + type)
            .then(result =>{
              this.loading = false
              switch (type){
                case 'types': 
                  store.types = result.data
                  break;
                case 'tecnologies':
                  store.tecnologies =result.data
                  console.log(store.tecnologies);
                  break;
                default:
                  store.projects = result.data.data;
                  console.log(result.data.data);
                  break;
              }

            })
            .catch(error =>{
              this.loading = false
              error = error.message
            })
        }
      },
      mounted(){
        this.getApi('projects');
        this.getApi('types');
        this.getApi('tecnologies');
      }
  }
</script>

<template>
    <div class="row text-center">
      <h1 class="">Progetti</h1>
    </div>
    
    <div class="container" v-if="!loading">
      <div class="row row-col-2 d-flex">
        <div class="types my-2">
            Tipi:
            <span class="badge rounded-pill text-bg-success mx-1" v-for="item in store.types" :key="`ty-${item.id}`">{{ item.name }}</span>
        </div>
        <div class="tecn my-2">
            Tecnologie:
            <span class="badge rounded-pill text-bg-info mx-1" v-for="item in store.tecnologies" :key="`tec-${item.id}`">{{ item.name }}</span>
        </div>
      </div>
      <div class="row" >

        <ProjectCard
            v-for="project in store.projects"
            :key="project.id"
            :title="project.title"
            :href="project.href"
            :desc="project.description"
            :type="project.type.name"
            :tecnologies="project.tecnologies"
  
          />
      </div>
      
    </div>
    <Loader v-else />
</template>


<style lang="scss" scoped>

</style>