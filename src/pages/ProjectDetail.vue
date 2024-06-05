<script>
  import { store } from '../data/store';
  import axios  from 'axios';
  export default {
    name: 'ProjectDetail',

    data(){
      return{
        store,
        flag :true,
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
    computed:{
      type(){
        if(!store.project.type){
          return 'nessun tipo'
        }
        return store.project.type.name 
      },
      // TODO:bug 
      formatDate(){
        // const d = this.flag ? new Date (store.project.created_at) : new Date (store.project.updated_at);
        let d;
        let dateValue = this.flag ? store.project.created_at : store.project.updated_at;
        if (dateValue) {
          d = new Date(dateValue);

        // creo una nuova data in base al dato che arriva dall' Api 
          console.log(d);
        }
        // opzioni di visualizzazione della data 
        let options = { 
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }
        // navigator.language restituisce la lingua del browser 
        return new Intl.DateTimeFormat(navigator.language, options).format(d)
      },


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
      <a :href="store.project.href" class="mb-2">View project</a>
      <div class="info">
        <p class="text-capitalize"><strong class="me-2">Autore:</strong>{{ store.project.user?.name }}</p>
        <p><strong class="me-2">Data creazione:</strong>{{formatDate}}</p>
        <p><strong class="me-2">Ultimo Aggiornamento:</strong>{{ formatDate}}</p>
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