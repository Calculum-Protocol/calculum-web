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
          class="d-flex flex-column justify-center"
          style="height: 100%;"
        >
          <v-container>
            <div
              class="font-weight-bold"
              style="font-size: 22px;"
            >
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
            <Vault1 />
          </v-col>

          <v-col>
            <Vault2 />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TopCard from "@/components/TopCard.vue";
import Vault1 from "@/components/Vault1.vue";
import Vault2 from "@/components/Vault2.vue";

export default {
  name: "HomeView",

  components: {
    TopCard,
    Vault1,
    Vault2,
  },
};
</script>
