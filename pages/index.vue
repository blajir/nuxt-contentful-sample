<template>
  <div class="about">
    <h1 class="about__title">About</h1>
    <p><img class="profile__image" :src="posts.person.fields.image.fields.file.url" alt=""></p>
    <h2 class="about__name">{{ posts.person.fields.name }}</h2>
    <p class="about__job">{{ posts.person.fields.title }}</p>
    <vue-markdown class="about__text">{{ posts.person.fields.shortBio }}</vue-markdown>
    <!-- <p>My posts is <nuxt-link :to="{name: 'posts'}">here.</nuxt-link></p> -->
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

<style lang="scss" scoped>
.profile__image {
  width: 150px;
  border-radius: 50%;
}

.about {
  &__title {
    font-family: 'Cookie', cursive;
  }
  &__name {
    margin-bottom: 15px;
    line-height: 1.3;
  }
  &__job {
    color: #a2a4a5;
    font-size: 14px;
  }
  &__text {
    font-size: 14px;
    line-height: 1.6;
  }
}


.about h1 {
  margin-bottom: 20px;
}
</style>
