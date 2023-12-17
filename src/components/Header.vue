<template>
  <v-app-bar
    app
    flat
    class="page-header"
    style="width: 100%; background-color: #191919"
  >
    <img src="@/assets/logo.svg" :preview="false" width="200" />

    <v-spacer></v-spacer>

    <a href="https://twitter.com/CalculumFi" target="_blank"><img class="ml-3" src="@/assets/icons/twitter.png" /></a>
    <a href="https://discord.gg/AWV4KEsjXk" target="_blank"><img class="ml-3" src="@/assets/icons/discord.png" /></a>
    <a href="https://github.com/Calculum-Protocol" target="_blank"><img class="ml-3" src="@/assets/icons/github.png" /></a>

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
  padding: 0px 40px 0px;
}
</style>
