<template>
  <v-app
    style="position: relative;">
    <v-toolbar
      fixed
      flat
      height="70"
      dark
      color="primary">
      <v-toolbar-title>
        <nuxt-link :to="{name: 'index'}" class="font-weight-light white--text logo">logjir</nuxt-link>
        </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <!-- <v-btn flat>About</v-btn> -->
        <v-btn
          flat
          class="white--text nav__item"
          @click="goToPosts">Posts</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content
      style="padding: 100px 0 70px;">
      <v-container grid-list-md text-xs-center>
        <nuxt/>
      </v-container>
    </v-content>
    <template>
      <v-footer
        height="70"
        class="pa-3">
        <v-spacer></v-spacer>
        <div class="footer__item">blajir &copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
export default {
  methods: {
    goToPosts () {
      this.$router.push('/posts')
    }
  }
}
</script>


<style>
html {
  font-family: 'Noto Sans JP', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.logo {
  font-family: 'Pacifico', cursive;
  text-decoration: none;
  letter-spacing: .1em;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}

.nav__item {
  text-decoration: none;
}

.footer__item {
  color: #a2a4a5;
}
</style>
