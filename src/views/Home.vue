<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola mundo</h1>

    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">Primary</button>
    <button @click="goToDaybook" class="btn btn-success">Primary</button>
     
  </div>
</template>

<script>
// @ is an alias to /src
 

export default {
  name: 'Home',
  methods :{
    goToDaybook(){
      this.$router.push({name: 'no-entry'})
    }
  }
}
</script>
 