<template>
  <ul>
    <li v-for="(post, index) in posts" v-bind:key="index">
      <h2>{{ post.fields.title }}</h2>
      <img :src="post.fields.heroImage.fields.file.url" width="100" alt="">
      <p>{{ post.sys.createdAt }}</p>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['posts']
}
</script>
