<template>
  <!-- <v-container grid-list-md text-xs-center> -->
    <v-layout row wrap>
      <v-flex
        v-for="(post, index) in posts"
        v-bind:key="index"
        xs12
        sm4>
        <v-hover>
          <v-card
            flat
            slot-scope="{ hover }"
            :class="`${hover ? 'is-hover' : ''}`"
            class="mx-auto">
            <nuxt-link :to="{ name: 'posts-slug', params: { slug: post.fields.slug }}" class="card-footer-item">
              <div class="card-image">
                <div
                   class="card-image__item"
                  :style="{ backgroundImage: 'url(' + post.fields.heroImage.fields.file.url + ')'}"></div>
              </div>
              <!-- <v-img
                :src="post.fields.heroImage.fields.file.url"
                aspect-ratio="1.75">
                </v-img> -->
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
    font-size: 21px !important;
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

  .card-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    background: #000;
    &__item {
      width: 100%;
      height: 100%;
      background-position: 50%;
      transition: .2s all ease;
      background-size: cover;
      .is-hover & {
        transform: scale(1.1);
        opacity: .75;
      }
    }
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

  .container.grid-list-md .layout .flex {
    padding: 16px;
  }
</style>
