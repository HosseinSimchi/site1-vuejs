<template>
<div>
  <HeaderSite />
  <BannerStarts />
  <BlogPosts />
  <FooterSite />
</div>
</template>

<script>
import BannerStarts from './components/BannerStarts.vue';
import HeaderSite from './components/HeaderSite.vue';
import BlogPosts from './components/BlogPosts.vue';
import FooterSite from './components/FooterSite.vue';


export default {
  name: 'App',
  components : {
    BannerStarts,HeaderSite,BlogPosts,FooterSite
}
}
</script>
