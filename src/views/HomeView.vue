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
              <a href="/"><p><span class="text-yellow">>_</span>Home</p></a>
              <a href="/" target="_blank"><p><span class="text-yellow">>_</span>Vaults</p></a>
              <a href="https://app.gitbook.com/o/sGAuGR9Uq2pGzhN0Y2im/home" target="_blank"><p><span class="text-yellow">>_</span>Docs</p></a>
              <a href="https://medium.com" target="_blank"><p><span class="text-yellow">>_</span>Blog</p></a>
            </div>
          </v-container>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet
          color="#3c3c3c"
          rounded="xl"
          class="pa-2"
          style="border: 1px solid white"
        >
          <v-container>
            <v-row>
              <span><b>>_</b><span class="text-yellow">CALCULUM</span>, DEMOCRATIZE ACCESS TO PROFESSIONAL-GRADE, FULLY- AUTOMATED. QUANTITATIVE TRADING STRATEGIES</span>
            </v-row>

            <v-row
              class="pt-2"
              style="border-top: 1px solid #fbc216"
            >
              <v-col
                sm="6"
                class="text-center right-border-yellow"
              >
                <span>Total Value Locked: $50k</span>
              </v-col>

              <v-col
                sm="6"
                class="text-center"
              >
                <span>Net APY: 20.0% Average since inception</span>
              </v-col>
            </v-row>
          </v-container>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",

  components: {
  },
};
</script>

<style>
* {
  color: #fff;
}

.text-yellow {
  color: #fbc216;
}

.right-border-yellow {
  border-right: 1px solid #fbc216;
}
</style>
