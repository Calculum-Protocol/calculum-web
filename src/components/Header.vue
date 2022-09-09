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

    <ClearButton
      text="Connect Wallet"
      class="ml-3"
    />
  </v-app-bar>
</template>

<script>
import ClearButton from "@/components/ClearButton.vue";

export default {
  name: "Header",

  components: {
    ClearButton,
  },
};
</script>


<style>
</style>
