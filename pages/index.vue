<template>
  <div class="about">
    <h1>About</h1>
    <p><img class="profile__image" :src="posts.person.fields.image.fields.file.url" alt=""></p>
    <h2>{{ posts.person.fields.name }}</h2>
    <p>{{ posts.person.fields.title }}</p>
    <vue-markdown>{{ posts.person.fields.shortBio }}</vue-markdown>
    <p>My posts is <nuxt-link :to="{name: 'posts'}">here.</nuxt-link></p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
  },
  async asyncData ({store, env}) {
    await store.dispatch('fetchItems', {env})
  },
  computed: {
    ...mapGetters(['posts'])
  }
}
</script>

<style scoped>
.profile__image {
  width: 200px;
  border-radius: 50%;
}

.about h1 {
  margin-bottom: 20px;
}
</style>
