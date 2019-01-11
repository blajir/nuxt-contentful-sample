<template>
  <v-app>
    <v-content>
      <h1>Post</h1>
      <Item :posts="posts.posts"></Item>
    </v-content>
  </v-app>
</template>

<script>
import Item from '~/components/Item.vue';
import { mapGetters } from 'vuex';

export default {
  components: {
    Item
  },
  asyncData ({env}) {},
  computed: {
    ...mapGetters(['posts'])
  }
}
</script>

<style scoped>
  h1 {
    margin-bottom: 20px;
  }


</style>
