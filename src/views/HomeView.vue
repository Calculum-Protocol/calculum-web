<template>
  <v-container style="width: 100%; max-width: 100%;">
    <v-row>
      <v-col
        cols="10"
        sm="1"
        class="pl-0"
      >
        <v-sheet
          color="#191919"
          rounded="lg"
          class="d-flex flex-column"
          style="height: 100%;"
        >
          <v-container class="pl-0">
            <div
              class="font-weight-bold"
              style="font-size: 1.35rem"
            >
              <a href="#"><p><span class="text-yellow font-weight-bold">>_</span>Home</p></a>
              <a href="#"><p><span class="text-yellow font-weight-bold">>_</span>Vaults</p></a>
              <a href="https://calculum.gitbook.io/calculum-docs" target="_blank"><p><span class="text-yellow font-weight-bold">>_</span>Docs</p></a>
              <a href="https://medium.com/@CalculumFi" target="_blank"><p><span class="text-yellow font-weight-bold">>_</span>Blog</p></a>
            </div>
          </v-container>
        </v-sheet>
      </v-col>

      <v-col style="padding: 0;">
        <TopCard />

        <v-row class="justify-space-around mt-7">
          <v-col>
            <Vault1 />
          </v-col>

          <v-col>
            <Vault2 />
          </v-col>

          <v-col>
            <Vault3 />
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
import Vault3 from "@/components/Vault3.vue";

export default {
  name: "HomeView",

  components: {
    TopCard,
    Vault1,
    Vault2,
    Vault3,
  },
};
</script>
