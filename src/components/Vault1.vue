<template>
  <VaultCard>
    <template v-slot:title>
      <v-row class="justify-center pb-1">
        <span class="card-title"><b><span class="text-yellow">VAULT #1:</span> LONG-ONLY MOMENTUM STRATEGY</b></span>
      </v-row>
    </template>

    <template v-slot:body>
      <v-row
        class="pt-2"
        style="border-top: 1px solid #fbc216;"
      >
        <v-col md="8">
          <v-row>
            <v-col class="pb-0">
              <span>> DEPOSIT ASSET:</span>
            </v-col>

            <v-col class="pb-0">
              <v-row no-gutters>
                <v-col style="flex-grow: initial;">
                  <span>USDC</span>
                </v-col>

                <v-col>
                  <img src="@/assets/coins/usdc.svg" width="24" class="ml-2" />
                </v-col>
              </v-row>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="pb-0">
              <span>> CURRENT TVL:</span>
            </v-col>

            <v-col class="pb-0">
              <span>$50K</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="pb-0">
              <span>> TVL CAP:</span>
            </v-col>

            <v-col class="pb-0">
              <span>$100K</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="pb-0">
              <span>> SHARPE RATIO:</span>
            </v-col>

            <v-col class="pb-0">
              <span>1.75 since inception</span>
            </v-col>
          </v-row>

          <v-row>
            <v-col class="pb-0">
              <span>> MAX DRAWDOWN:</span>
            </v-col>

            <v-col class="pb-0">
              <span>-5.0%</span>
            </v-col>
          </v-row>
        </v-col>

        <v-col class="text-center">
          <v-row
            dense
            no-gutters
            class="align-content-space-between"
            style="height: 100%;"
          >
            <v-col>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <div
                    v-bind="attrs"
                    v-on="on"
                  >
                    <ClearButton>
                      <template v-slot:text>
                        Vault Details
                      </template>
                    </ClearButton>
                  </div>
                </template>

                <span class="text-uppercase">Coming soon</span>
              </v-tooltip>
            </v-col>

            <v-col
              class="white-border pa-1 text-uppercase rounded-lg"
            >
              <span>Your Holdings</span>
              <br />
              <span v-if="metaMaskStore.account">$1.500.0</span>
              <span v-else>--</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <div
        class="text-center card-title mt-6"
        style="border: 1px solid #fbc216; width: 60%; margin: 0 auto;"
      >
        Net APY: <span class="text-yellow">20.0%</span> since inception
      </div>

      <v-row class="text-center mt-2">
        <v-col>
          <v-dialog
            v-model="showDepositDialog"
            max-width="600"
            style="font-size: 24px;"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                depressed
                dark
                color="#958a81"
                class="white-border rounded-lg"
                style="font-size: 16px;"
                v-bind="attrs"
                v-on="on"
              >
                Initiate Deposit
              </v-btn>
            </template>

            <template v-slot:default="showDepositDialog">
              <v-card
                color="#3c3c3c"
                class="pa-2"
                style="color: #fff;"
              >
                <v-toolbar
                  dark
                  flat
                  color="#3c3c3c"
                  class="card-title"
                  style="border-bottom: 1px solid #fbc216;"
                >
                  Deposit <span class="text-yellow pl-2 font-weight-bold">USDC</span>
                </v-toolbar>

                <v-card-text class="pa-12">
                  <div class="text-body-1">
                    <v-text-field
                      outlined
                      dark
                      color="#fff"
                      label="Amount"
                      :rules="depositInputRules"
                      v-model="depositValue"
                    ></v-text-field>
                  </div>
                </v-card-text>

                <v-card-actions class="justify-end">
                  <v-btn
                    class="white-border rounded-lg"
                    @click="showDepositDialog.value = false"
                  >
                    Cancel
                  </v-btn>

                  <v-btn
                    depressed
                    dark
                    color="#b86840"
                    class="white-border rounded-lg"
                    style="color: #fff;"
                    @click="animateLoader"
                  >
                    Deposit
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>

          <v-dialog
            hide-overlay
            persistent
            v-model="showLoader"
            width="300"
          >
            <v-card
              dark
              class="pa-10"
              color="#3c3c3c"
            >
              <v-card-text class="pa-0">
                <v-progress-linear
                  indeterminate
                  color="#fbc216"
                ></v-progress-linear>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-col>

        <v-col>
          <v-btn
            depressed
            dark
            color="#b86840"
            class="white-border rounded-lg"
            style="font-size: 16px;"
          >
            Initiate Withdrawal
          </v-btn>
        </v-col>
      </v-row>
    </template>
  </VaultCard>
</template>

<script>
import ClearButton from "@/components/ClearButton.vue";
import VaultCard from "@/components/VaultCard.vue";
import { useMetaMaskStore } from "@/stores/metamask";
import { ethers } from "ethers";

export default {
  name: "Vault1",

  components: {
    ClearButton,
    VaultCard,
  },

  data: () => ({
    depositInputRules: [value => !!value || "Required"],
    depositValue: null,
    metaMaskStore: useMetaMaskStore(),
    showDepositDialog: false,
    showLoader: false,
  }),

  methods: {
    deposit: async function() {
      const contractAbi = require("@/assets/abi.json").abi;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contractAddress = "0x9956150D4065892cC28b34C588Cb08e9eD01a2C9";
      const contract = new ethers.Contract(contractAddress, contractAbi, provider);

      const signer = provider.getSigner();
      const signerAddress = await signer.getAddress();
      const contractWithSigner = contract.connect(signer);

      const res1 = await contractWithSigner.deposit(this.depositValue, signerAddress);
      const res2 = await contractWithSigner.balanceOf(signerAddress);
      console.log(res1);
      console.log(res2);
    },
    animateLoader: function(val) {
      this.showLoader = true;

      setTimeout(() => {
        this.showLoader = false;
        this.showDepositDialog = false;
      }, 2000)
    },
  }
};
</script>
