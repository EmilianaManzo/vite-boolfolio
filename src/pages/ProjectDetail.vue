<script>
  import { store } from '../data/store';
  import axios  from 'axios';
  import Loader from '../components/partialsGeneric/Loader.vue';
  export default {
    name: 'ProjectDetail',
    components:{
      Loader
    },

    data(){
      return{
        store,
        flag :true,
      }
    },

    methods:{
      getApi(){
        this.flag = true;
        const slug = this.$route.params.slug;
        axios.get(store.apiUrl + 'projectbyslug/' + slug)
            .then(result =>{
              this.flag = false ;
              store.project = result.data.project
              console.log(store.project);
            })
            .catch(error =>{
              this.flag = false ;
              console.log(error.message);
            })
      }
    },
    computed:{
      type(){
        if(!store.project.type){
          return 'nessun tipo'
        }
        return store.project.type.name 
      },

      formatDateCreation(){
        // creo una nuova data in base al dato che arriva dall'Api 
        const d = new Date(store.project.created_at);

        // opzioni di visualizzazione 
        let options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        return new Intl.DateTimeFormat(navigator.language, options).format(d);
      },

      formatDateUpdate(){
        // creo una nuova data in base al dato che arriva dall'Api 
        const d = new Date(store.project.updated_at);

        // opzioni di visualizzazione 
        let options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        };

        // navigator.language restituisce la lingua del browser
        return new Intl.DateTimeFormat(navigator.language, options).format(d);
      },


    },
    mounted(){
      this.getApi();
    }
  }
</script>

<template>
  <div class="row">
    <div class="col project" v-if="!flag">
      <div class="title text-uppercase mb-5">
        <h1>{{ store.project.title }}</h1>
        <img :src="store.project.image" :alt="store.project.title">
      </div>
      <a :href="store.project.href" class="mb-2">View project</a>
      <div class="info">
        <p class="text-capitalize"><strong class="me-2">Autore:</strong>{{ store.project.user?.name }}</p>
        <p><strong class="me-2">Creazione:</strong>{{ formatDateCreation}}</p>
        <p><strong class="me-2">Ultimo Aggiornamento:</strong>{{ formatDateUpdate}}</p>
      </div>
      <div>
        <p class="card-text text-capitalize"><strong class="me-2">Tipo:</strong>{{ type }}</p>
        <p v-if="store.project.tecnologies" class="card-text">
          <strong class="me-2">Tecnologia:</strong>
         <span
            class="badge rounded-pill text-bg-info mx-1"
            v-for="(tecnology, index) in store.project?.tecnologies"
            :key="index">{{ tecnology.name }}</span>
        </p>
        <p v-else class="card-text">
          <strong class="me-2">Tecnologia:</strong>
         <span>nessuna tecnologia </span>
        </p>
        <p class="card-text m-0 text-capitalize"><strong class="me-2">Descrizione:</strong>{{ store.project.description }}</p>
      </div>
    </div>
    <Loader v-else />
  </div>
</template>


<style lang="scss" scoped>
  .project{

    img{
      width: 50%;
    }
    a{

      text-decoration: none;
      cursor: pointer;
    }
  }
</style>