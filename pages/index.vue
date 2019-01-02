<template>
  <div>
    <h1></h1>
    <img class="profile__image" :src="person.fields.image.fields.file.url" alt="">
    <p>{{ person.fields.name }}</p>
    <p>{{ person.fields.title }}</p>
    <nuxt-link :to="{name: 'posts'}"><p>posts</p></nuxt-link>
  </div>
</template>

<script>
// import Item from '~/components/Item.vue';
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  // components: {
    // Item
  // },
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
      console.log(posts, entries.items[0])
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
</style>
