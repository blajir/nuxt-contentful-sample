<template>
  <ul>
    <li v-for="(post, index) in posts" v-bind:key="index">
      <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.fields.slug }}" class="card-footer-item">
        <h2>{{ post.fields.title }}</h2>
        <img :src="post.fields.heroImage.fields.file.url" width="100" alt="">
        <p>{{ post.sys.createdAt }}</p>
      </nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['posts']
}
</script>
