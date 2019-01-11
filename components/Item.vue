<template>
  <!-- <v-container grid-list-md text-xs-center> -->
    <v-layout row wrap>
      <v-flex v-for="(post, index) in posts" v-bind:key="index" xs4>
        <v-hover>
          <v-card
            flat
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="mx-auto">
            <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.fields.slug }}" class="card-footer-item">
              <v-img
                :src="post.fields.heroImage.fields.file.url"
                aspect-ratio="2.75">
                </v-img>
              <v-card-title primary-title>
                <div class="card-text__wrapper">
                  <p class="card-text__date">{{ (new Date(post.fields.publishDate)).toLocaleDateString() }}</p>
                  <h3 class="headline mb-0">{{ post.fields.title }}</h3>
                  <p class="card-text__text">{{ post.fields.description }}</p>
                </div>
              </v-card-title>
            </nuxt-link>
          </v-card>
        </v-hover>
      </v-flex>
    </v-layout>
  <!-- </v-container> -->
</template>

<script>
export default {
  props: ['posts']
}
</script>

<style lang="scss" scoped>
  .headline {
    font-weight: bold;
  }
  .card-footer-item {
    text-decoration: none;
    color: #222;
  }
  .card-text__wrapper {
    text-align: left;
    font-family: 'Noto Sans JP', sans-serif;
  }

  .card-text__text {
    margin-top: 10px;
    font-size: 14px;
    line-height: 1.5;
  }

  .card-text__date {
    margin-bottom: 10px;
    font-size: 12px;
  }
</style>
