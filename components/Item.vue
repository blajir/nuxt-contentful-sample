<template>
  <!-- <v-container grid-list-md text-xs-center> -->
    <v-layout row wrap>
      <v-flex v-for="(post, index) in posts" v-bind:key="index" xs4>
        <v-hover>
          <v-card
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
                  <h3 class="headline mb-0">{{ post.fields.title }}</h3>
                  <div>{{ post.fields.description }}</div>
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

<style scoped>
  .headline {
  /* padding: 3em 0 0; */
  }
  .headline h1 {
    font-size: 3.5em;
  }
  .card-footer-item {
    text-decoration: none;
    color: #222;
  }
  .card-text__wrapper {
    text-align: left;

  }

</style>
