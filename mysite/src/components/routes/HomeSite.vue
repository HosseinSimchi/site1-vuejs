<template>
<div>
    <BannerStarts />
    <BlogPosts />
    <FooterSite />
</div>
</template>

<script>

import BannerStarts from '../BannerStarts.vue';
import BlogPosts from '../BlogPosts.vue';
import FooterSite from '../FooterSite.vue';

export default {
name: 'HomeSite',
components : {
    BannerStarts,
    FooterSite,
    BlogPosts,
}
}
</script>
  