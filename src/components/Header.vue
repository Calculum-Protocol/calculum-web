<template>
  <v-app-bar
    app
    flat
    class="page-header"
    style="width: 1024px; background-color: #191919; left: initial; right: initial; padding-left: 0;"
  >
    <img
      src="@/assets/logo.svg"
      :preview=false
      width="200"
    />

    <v-spacer></v-spacer>

    <img class="ml-3" src="@/assets/icons/twitter.png" />
    <img class="ml-3" src="@/assets/icons/discord.png" />
    <img class="ml-3" src="@/assets/icons/github.png" />

    <MetaMask />
  </v-app-bar>
</template>

<script>
import MetaMask from "@/components/MetaMask.vue";

export default {
  name: "Header",

  components: {
    MetaMask,
  },
};
</script>

<style>
.page-header .v-toolbar__content {
  padding-left: 0;
}
</style>
