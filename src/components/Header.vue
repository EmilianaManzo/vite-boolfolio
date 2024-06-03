<script>
  export default {
    
  }
</script>

<template>
  <header>

          <nav class="navbar navbar-expand-lg h-100">
            <div class="container-fluid">
          
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                  <li class="nav-item"><router-link :to="{name:'home'}">Home</router-link></li>
                  <li class="nav-item"><router-link :to="{name:'projects'}">Progetti</router-link></li>
                  <li class="nav-item"><router-link :to="{name:'contacts'}">Contatti</router-link></li>
                  <li class="nav-item"><router-link :to="{name:'about'}">About Us</router-link></li>
                </ul>
              
              </div>
            </div>
          </nav>

  </header>
</template>


<style lang="scss" scoped>
@use '../assets/scss/main.scss';

header{
  background-color: hotpink;
  height: 70px;
  li{
    a{
      color: white;
      text-decoration: none;
      margin: 0 10px;
    }
  }
}
</style>