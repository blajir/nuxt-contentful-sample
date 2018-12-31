<template>
  <div>
    <h1>{{ post.fields.title }}</h1>
    <p>{{ post.fields.publishDate }}</p>
    <ul>
      <li v-for="(tag, index) in post.fields.tags" v-bind:key="index">
        {{ tag }}
      </li>
    </ul>
    <p><img :src="post.fields.heroImage.fields.file.url" :alt="post.fields.heroImage.fields.file.fileName" width="640"></p>
    <vue-markdown>{{ post.fields.body }}</vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  components: {
    VueMarkdown
  },
  asyncData ({ env, params }) {
    return client.getEntries({
      'content_type': env.CTF_BLOG_POST_TYPE_ID,
      'fields.slug': params.slug
    }).then(entries => {
      console.log(entries.items[0]);
      return {
        post: entries.items[0]
      }
    })
    .catch(console.error)
  },
}
</script>
