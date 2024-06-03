<script>
  import { store } from '../../data/store'
  export default {
    props:{
      data : Object
    },
    data(){
      return{
        store
      }
    },
    methods:{
      changePage(link){
        this.$emit('changePage', link)
      }
    }

  }
</script>


<template>
    <div class="paginator ">
      <ul class="pagination justify-content-center">
        <li
          class="page-link"
          :class="{'active': link.active , 'disabled': !link.url}"
          v-for="link in data.links"
          :key="link.label"
          v-html="link.label"
          @click="changePage(link.url)">
        </li>
      </ul>
    </div>
</template>


<style lang="scss" scoped>

</style>