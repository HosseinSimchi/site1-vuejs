<template>
  <header class="">
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <router-link class="navbar-brand" :to="{name : 'Home'}"> <h2>Simchi Website<em>.</em></h2> </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto" v-if = "templateName=='Home'">
            <li class="nav-item active">
              <router-link class="nav-link" :to="{name:'Home'}">Home<span class="sr-only">(current)</span></router-link>
            </li> 
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'about'}">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'blog'}">Blog Entries</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'postdetails'}">Post Details</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'contact'}">Contact Us</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" v-else-if = "templateName=='About'">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'Home'}">Home</router-link>
            </li> 
            <li class="nav-item active">
              <router-link class="nav-link" :to="{name:'about'}">About Us<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'blog'}">Blog Entries</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'postdetails'}">Post Details</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'contact'}">Contact Us</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" v-else-if = "templateName=='Blog'">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'Home'}">Home</router-link>
            </li> 
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'about'}">About Us</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" :to="{name:'blog'}">Blog Entries<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'postdetails'}">Post Details</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'contact'}">Contact Us</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" v-else-if = "templateName=='Posts'">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'Home'}">Home</router-link>
            </li> 
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'about'}">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'blog'}">Blog Entries</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" :to="{name:'postdetails'}">Post Details<span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'contact'}">Contact Us</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto" v-else-if = "templateName=='Contact'">
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'Home'}">Home</router-link>
            </li> 
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'about'}">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'blog'}">Blog Entries</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name:'postdetails'}">Post Details</router-link>
            </li>
            <li class="nav-item active">
              <router-link class="nav-link" :to="{name:'contact'}">Contact Us<span class="sr-only">(current)</span></router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>
  
<script>


export default {
props : {
  templateName : {type : String, default : 'Home'}
},
name: 'HeaderSite',

}
</script>
  