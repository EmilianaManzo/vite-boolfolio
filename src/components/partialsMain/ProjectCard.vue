<script>
  import { store } from '../../data/store'

  export default {
    props:{
      title: String,
      href: String,
      desc: String,
      type: String,
      tecnologies:Array

    }
  }
</script>

<template>
  <div class="col my-5 ">
    <div class="card" style="width: 18rem; height: 40rem;">
      <div class="card-body rounded-pill my-2 ">
        <h5 class="card-title my-1 text-uppercase ">{{ title }}</h5>
        <div class="line my-3 "><a :href="href"></a></div>
        <p class="card-text"><strong>Tipo:</strong>{{ type }}</p>
        <p class="card-text">
          <strong>Tecnologia:</strong>
          <span class="badge rounded-pill text-bg-info" v-for="(tecnology, index) in tecnologies" :key="index">{{ tecnology.name }}</span>
        </p>
        <p class="card-text m-0 "><strong>Descrizione:</strong>{{ desc }}</p>
        
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  strong{
    margin-right: 10px;
  }
</style>