<template>
  <v-app>
    <v-main>
      <Header />

      <router-view/>
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

#app {
  font-size: 20px;
  font-weight: normal;
  margin: 0 auto;
  padding: 0;
  background-color: #191919;
  color: #fff;
  font-family: "Agency FB";
}

a {
  text-decoration: none;
}
</style>
