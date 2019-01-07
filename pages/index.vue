<template>
  <div class="about">
    <h1>About</h1>
    <p><img class="profile__image" :src="person.fields.image.fields.file.url" alt=""></p>
    <h2>{{ person.fields.name }}</h2>
    <p>{{ person.fields.title }}</p>
    <vue-markdown>{{ person.fields.shortBio }}</vue-markdown>
    <p>My posts is <nuxt-link :to="{name: 'posts'}">here.</nuxt-link></p>
  </div>
</template>

<script>
// import Item from '~/components/Item.vue';
import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    VueMarkdown
  },
  // `env` is available in the context object
  asyncData ({env}) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID
      }),
      // fetch all blog posts sorted by creation date
      client.getEntries({
        'content_type': env.CTF_BLOG_POST_TYPE_ID,
        order: '-sys.createdAt'
      })
    ]).then(([entries, posts]) => {
      // return data that should be available
      // in the template
      return {
        person: entries.items[0],
        posts: posts.items
      }
    }).catch(console.error)
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
