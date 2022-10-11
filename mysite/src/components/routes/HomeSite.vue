<template>
<div>
    <HeaderSite templateName="Home" />
    <BannerStarts />
    <BlogPosts />
    <FooterSite />
</div>
</template>

<script>
import BannerStarts from '../BannerStarts.vue';
import HeaderSite from '../HeaderSite.vue';
import BlogPosts from '../BlogPosts.vue';
import FooterSite from '../FooterSite.vue';

export default {
name: 'HomeSite',
components : {
    BannerStarts,
    HeaderSite,
    FooterSite,
    BlogPosts,
},

}
</script>
  