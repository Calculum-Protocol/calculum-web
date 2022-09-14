<template>
  <v-app-bar
    app
    color="#191919"
    flat
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
