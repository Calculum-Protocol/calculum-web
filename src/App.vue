<template>
  <v-app>
    <v-main>
      <Header />

      <router-view class="mt-7" />
    </v-main>
  </v-app>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
  }),
};
</script>

<style>
@font-face {
  font-family: "Agency FB";
  src: url(./assets/fonts/agency-fb.ttf) format("truetype");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "Agency FB";
  src: url(./assets/fonts/agency-fb-bold.ttf) format("truetype");
  font-weight: bold;
  font-style: normal;
}

* {
  color: #fff;
}

a {
  text-decoration: none;
}

body {
  background-color: #191919;
}

#app {
  font-size: 1.15rem;
  font-weight: normal;
  margin: 0 auto;
  padding: 0px 40px 0px;
  background-color: #191919;
  color: #fff;
  font-family: "Agency FB";
}

.text-yellow {
  color: #fbc216;
}

.white-border {
  border: 1px solid #fff !important;
}

.card-title {
  font-size: 1.25rem;
}
</style>
