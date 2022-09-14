<template>
  <VaultCard>
    <template v-slot:title>
      <v-row class="justify-center pb-1">
        <span class="card-title"><b><span class="text-yellow">VAULT #2:</span> LONG-SHORT MOMENTUM STRATEGY</b></span>
      </v-row>
    </template>

    <template v-slot:body>
      <v-row
        class="pt-2"
        style="border-top: 1px solid #fbc216"
      >
        <v-col md="8">
          <v-row>
            <v-col class="pb-0">
              <span>> COMING SOON...</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </template>
  </VaultCard>
</template>

<script>
import VaultCard from "@/components/VaultCard.vue";

export default {
  name: "Vault2",

  components: {
    VaultCard,
  },
};
</script>
