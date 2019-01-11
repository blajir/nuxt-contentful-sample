import Vuex from 'vuex';
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

const store = {
  state: {
    posts: [],
  },
  getters: {
    posts: state => state.posts,
  },
  mutations: {
    setItems(state, { posts }) {
      state.posts = posts;
    },
  },
  actions: {
    async fetchItems({ commit }, {env}) {
      const posts = await Promise.all([
        client.getEntries({
          'sys.id': env.CTF_PERSON_ID
        }),
        client.getEntries({
          'content_type': env.CTF_BLOG_POST_TYPE_ID,
          order: '-sys.createdAt'
        })
      ]).then(([entries, posts]) => {
        const ENTRIES_LENGTH = entries.total - 1;
        return {
          person: entries.items[ENTRIES_LENGTH],
          posts: posts.items
        }
      }).catch(console.error)
      commit('setItems', { posts });
    }
  }
};

export default () => new Vuex.Store(store);
