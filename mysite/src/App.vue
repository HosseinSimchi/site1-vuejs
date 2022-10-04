<template>
  <router-view />
</template>

<script>
import axios from 'axios';
export default {
  name: 'App',
  mounted(){
    axios.get("mongodb://localhost:27017/User/users")
    .then(response => console.log(response))
    .catch(error => console.log(error))
  }
}
</script>
