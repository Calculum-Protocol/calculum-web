<template>
  <v-container>
    <v-row>
      <v-col
        cols="10"
        sm="2"
      >
        <v-sheet
          color="#191919"
          rounded="lg"
        >
          <v-container>
            <div>
              <a href="/"><p><span class="text-yellow font-weight-bold">>_</span>Home</p></a>
              <a href="/" target="_blank"><p><span class="text-yellow font-weight-bold">>_</span>Vaults</p></a>
              <a href="https://app.gitbook.com/o/sGAuGR9Uq2pGzhN0Y2im/home" target="_blank"><p><span class="text-yellow font-weight-bold">>_</span>Docs</p></a>
              <a href="https://medium.com" target="_blank"><p><span class="text-yellow font-weight-bold">>_</span>Blog</p></a>
            </div>
          </v-container>
        </v-sheet>
      </v-col>

      <v-col>
        <TopCard />

        <v-row class="justify-space-around mt-7">
          <v-col>
            <VaultCard />
          </v-col>

          <v-col>
            <VaultCard />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TopCard from "@/components/TopCard.vue";
import VaultCard from "@/components/VaultCard.vue";

export default {
  name: "HomeView",

  components: {
    TopCard,
    VaultCard,
  },
};
</script>
