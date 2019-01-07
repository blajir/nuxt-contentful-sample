<template>
  <div class="detail">
    <!-- <div>
      <v-breadcrumbs :items="items" divider=">"></v-breadcrumbs>
    </div> -->

    <h1 class="detail__title">{{ post.fields.title }}</h1>
    <p class="detail__date">{{ post.fields.publishDate }}</p>
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
      console.log(entries.items[0]);
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
  color: #222;
}

.detail__hero {
  width: 100%;
  height: 300px;
  margin-bottom: 50px;
  background-position: 50% 50%;
}

/* .detail__hero > img {
  width: 100%;
} */

.detail__date {
  text-align: right;
}

.detail-body {
  text-align-last: left;
}

.detail-body h2 {
  margin-bottom: 30px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: .03em;
}

.detail-body h3 {
  margin-bottom: 30px;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: .03em;
}

.detail-body p {
  font-size: 16px;
  line-height: 1.5;
  text-align: justify;
}

.detail-body p + h2,
.detail-body p + h3,
.detail-body ul + h2,
.detail-body ul + h3 {
  margin-top: 70px;
}

.detail-body > ul {
  margin-bottom: 20px;
}

.detail-body > ul > li {
  text-align: justify;
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
