<script>
  export default {
    
  }
</script>

<template>
  <footer>
    <div class="container-fluid text-center py-3 mt-4 bg-body-tertiary {{Route::currentRouteName() === 'wines' ? 'fixed-bottom ' : ''}}">
        <div class="card-footer text-body-secondary">
        Powered By Emy Ma
        </div>
    </div>

  </footer>
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss'
</style>