<template>
  <v-sheet
    color="#3c3c3c"
    rounded="xl"
    class="pa-2 white-border"
  >
    <v-container>
      <v-row class="pb-1">
        <span
          class="card-title"
          style="font-size: 1.5rem;"
        >
          <b>>_<span class="text-yellow">CALCULUM</span></b>, Democratize access to professional-grade, fully-automated, quantitative trading strategies accessible via permissionless, non-custodial vaults
        </span>
      </v-row>

      <v-row
        dense
        class="pt-3 mt-3"
        style="border-top: 1px solid #fbc216;"
      >
        <v-col
          sm="6"
          class="text-center right-border-yellow"
        >
          <span style="font-size: 1.75rem;">Total Value Locked: $[ ]k</span>
        </v-col>

        <v-col
          sm="6"
          class="text-center"
        >
          <span style="font-size: 1.75rem;">Net APY: [ ]%</span>
          <span style="font-size: 1.5rem;" class="ml-2">Average since inception</span>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>

<style>
.right-border-yellow {
  border-right: 1px solid #fbc216;
}
</style>
