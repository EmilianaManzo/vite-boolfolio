<script>
  import { store } from '../../data/store'

  export default {
    props:{
      title: String,
      href: String,
      desc: String,
      type: String,


    }
  }
</script>

<template>
  <div class="col my-5 ">
    <div class="" style="width: 18rem;">
      <div class="card-body rounded-pill my-2 text-center">
        <h5 class="card-title my-1 ">{{ title }}</h5>
        <div class="line my-3 "><a :href="href"></a></div>
        <p class="card-text"><strong>Tipo:</strong>{{ type }}</p>
        <p class="card-text m-0 "><strong>Descrizione:</strong>{{ desc }}</p>
        
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>