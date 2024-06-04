<script>
  import { store } from '../../data/store'

  export default {
    props:{
      project : Object
    }
  }
</script>

<template>
  <div class="col my-5 ">
    <div class="card" style="width: 18rem; height: 40rem;">
      <div class="card-body rounded-pill my-2 ">
        <h5 class="card-title my-1 text-uppercase "><router-link :to="{ name: 'projectDetail', params:{slug: project.slug}}">{{ project.title }}</router-link></h5>
        <p class="card-text"><strong>Tipo:</strong>{{ project.type.name }}</p>
        <p class="card-text">
          <strong>Tecnologia:</strong>
          <span class="badge rounded-pill text-bg-info" v-for="(tecnology, index) in project.tecnologies" :key="index">{{ tecnology.name }}</span>
        </p>
        <p class="card-text m-0 "><strong>Descrizione:</strong>{{ project.description }}</p>
        
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  strong{
    margin-right: 10px;
  }
  a{
    color: black;
    text-decoration: none;
    cursor: pointer;
  }
</style>