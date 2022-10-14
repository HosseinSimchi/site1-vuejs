<template>
  <header class="">
    <nav class="navbar navbar-expand-lg">
      <div class="container" >
        <router-link class="navbar-brand" :to="{name : 'Home'}">
           <h2 v-if="username === 'SIMCHI WEBSITE'">{{username}}<em>.</em></h2> 
           <h2 v-else>Hi, {{username}}<em>.</em></h2> 
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li :class="classNameHome" v-on:click="clickHome()">
              <router-link class="nav-link" :to="{name:'Home'}">Home<span class="sr-only">(current)</span></router-link>
            </li> 
            <li :class="classNameAbout" v-on:click="clickAbout()">
              <router-link class="nav-link" :to="{name:'about'}">About Us</router-link>
            </li>
            <li :class="classNameBlog" v-on:click="clickBlog()">
              <router-link class="nav-link" :to="{name:'blog'}">Blog Entries</router-link>
            </li>
            <li :class="classNamePosts" v-on:click="clickPosts()">
              <router-link class="nav-link" :to="{name:'postdetails'}">Post Details</router-link>
            </li>
            <li :class="classNameContact" v-on:click="clickContact()">
              <router-link class="nav-link" :to="{name:'contact'}">Contact Us</router-link>
            </li>
            <li :class="classNameSign" v-on:click="clickSign()" v-if="username === 'SIMCHI WEBSITE'">
              <router-link class="nav-link" :to="{name:'signIn'}">Sign In / Sign Up</router-link>
            </li> 
            <li class="nav-item" v-on:click="clickLogout()" v-else>
              <router-link class="nav-link" :to="{name:'Home'}">LogOut</router-link>
            </li> 
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
  
<script>
import axios from "axios";

export default {
name: 'HeaderSite',
data () {
  return {
    classNameHome : 'nav-item',
    classNameAbout : 'nav-item',
    classNameContact : 'nav-item',
    classNamePosts : 'nav-item',
    classNameBlog : 'nav-item',
    classNameSign : 'nav-item'
  }
},
props : {
  templateName : {type : String, default : 'Home'},
  username: {type : String}
},
methods : {
  clickHome(){
    this.classNameHome = 'nav-item active';
    this.classNameAbout = 'nav-item';
    this.classNameContact = 'nav-item';
    this.classNamePosts = 'nav-item';
    this.classNameBlog = 'nav-item';
    this.classNameSign = 'nav-item';

  },
  clickAbout(){
    this.classNameHome = 'nav-item';
    this.classNameAbout = 'nav-item active';
    this.classNameContact = 'nav-item';
    this.classNamePosts = 'nav-item';
    this.classNameBlog = 'nav-item';
    this.classNameSign = 'nav-item';
  },
  clickContact(){
    this.classNameHome = 'nav-item';
    this.classNameAbout = 'nav-item';
    this.classNameContact = 'nav-item active';
    this.classNamePosts = 'nav-item';
    this.classNameBlog = 'nav-item';
    this.classNameSign = 'nav-item';
  },
  clickPosts(){
    this.classNameHome = 'nav-item';
    this.classNameAbout = 'nav-item';
    this.classNameContact = 'nav-item';
    this.classNamePosts = 'nav-item active';
    this.classNameBlog = 'nav-item';
    this.classNameSign = 'nav-item';
  },
  clickBlog(){
    this.classNameHome = 'nav-item';
    this.classNameAbout = 'nav-item';
    this.classNameContact = 'nav-item';
    this.classNamePosts = 'nav-item';
    this.classNameBlog = 'nav-item active';
    this.classNameSign = 'nav-item';
  },
  clickSign(){
    this.classNameHome = 'nav-item';
    this.classNameAbout = 'nav-item';
    this.classNameContact = 'nav-item';
    this.classNamePosts = 'nav-item';
    this.classNameBlog = 'nav-item';
    this.classNameSign = 'nav-item active';
  },
  async clickLogout(){
    try{
      const response = await axios.get('http://localhost:3000/user/logout')
      console.log(response);
    }catch(e){console.log(e)}
  } 
}
}
</script>
  