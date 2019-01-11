<template>
  <div class="detail">
    <!-- <div>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div> -->

    <h1 class="detail__title">{{ post.fields.title }}</h1>
    <p class="detail__date">{{ (new Date(post.fields.publishDate)).toLocaleDateString() }}</p>
    <!-- <p class="detail__date">{{ post.fields.publishDate | moment("dddd, MMMM Do YYYY") }}</p> -->
    <!-- <ul>
      <li v-for="(tag, index) in post.fields.tags" v-bind:key="index">
        {{ tag }}
      </li>
    </ul> -->
    <div class="detail__hero" :style="{ backgroundImage: 'url(' + post.fields.heroImage.fields.file.url + ')' }"></div>
    <vue-markdown class="detail-body">{{ post.fields.body }}</vue-markdown>
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
      return {
        post: entries.items[0]
      }
    })
    .catch(console.error)
  },
}
</script>

<style>
.detail {
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  color: #222;
  font-family: 'Noto Sans JP', sans-serif;
  text-align: justify;
}

.detail__hero {
  width: 100%;
  height: 300px;
  margin: 60px 0 50px;
  background-position: 50% 50%;
}

.detail__date {
  margin-top: 10px;
  font-size: 13px;
}

.detail-body {
}

.detail-body h2 {
  margin: 70px 0 40px;
  font-size: 28px;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: .03em;
}

.detail-body h3 {
  margin: 40px 0 10px;
  font-size: 21px;
  font-weight: 500;
  line-height: 1.3;
  letter-spacing: .03em;
}

.detail-body p {
  margin: 30px 0;
  font-size: 16px;
  line-height: 1.8;
}

.detail-body > ul {
  margin-bottom: 20px;
}

.detail-body > ul > li + li {
  margin-top: 10px;
}

.foreground .page-bar {
  border-bottom: 0;
}

.copy {
  padding-bottom: 7em;
}
.copy *:not(div) {
  margin: 2em 0 1em;
}
.copy h3 {
  font-size: 1.35em;
}
.copy ul {
  margin: 0;
  padding-left: 1em;
  list-style: disc;
}
.copy li {
  margin: 0;
}


</style>
