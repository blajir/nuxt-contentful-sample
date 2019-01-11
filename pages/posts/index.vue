<template>
  <div class="posts">
    <h1 class="posts__title">Posts</h1>
    <Item :posts="posts.posts"></Item>
  </div>
</template>

<script>
import Item from '~/components/Item.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Item
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
  h1 {
    margin-bottom: 20px;
  }

  .posts__title {
    font-family: 'Cookie', cursive;
  }
</style>
