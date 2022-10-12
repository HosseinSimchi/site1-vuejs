<template>
<div>
  <HeaderSite templateName="Home" :username="username"/>
  <router-view />
</div>
</template>

<script>
import HeaderSite from './components/HeaderSite.vue';
// import axios from 'axios';
export default {
  name: 'App',
  components:{
    HeaderSite
  },
data () {
    return {
        username:"SIMCHI WEBSITE",
    }
},
created(){
  this.emitter.on('Username', (evt) => {
    console.log(this.username);
    this.username = evt.username;
    console.log(this.username);
    })
}
}
</script>
