<template>
  <v-sheet
    color="#3c3c3c"
    class="pa-2"
    style="border: 1px solid white"
  >
    <v-container>
      <v-row class="justify-center pb-1">
        <span class="card-title"><b><span class="text-yellow">VAULT #1:</span> LONG-ONLY MOMENTUM STRATERY</b></span>
      </v-row>

      <v-row
        class="pt-2"
        style="border-top: 1px solid #fbc216"
      >
        <v-col md="8">
          <v-row>
            <v-col class="pb-0">
              <span>> DEPOSIT ASSET:</span>
            </v-col>

            <v-col class="pb-0">
              <span>USDC</span>
              <img src="@/assets/coins/usdc.svg" width="24" class="ml-2" />
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
              <span>1.75 since incention</span>
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
            <v-col class="white-border pa-0 rounded-lg">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    depressed
                    color="transparent"
                    style="width: inherit; color: #fff;"
                    v-bind="attrs"
                    v-on="on"
                  >
                    Vault Details
                  </v-btn>
                </template>

                <span class="text-uppercase">Coming soon</span>
              </v-tooltip>
            </v-col>

            <v-col
              class="white-border pa-1 text-uppercase rounded-lg"
            >
              <span>Your Holdings</span>
              <br />
              <span>--</span>
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
          <v-btn
            depressed
            dark
            color="#958a81"
            class="white-border rounded-lg"
          >
            Initiate Deposit
          </v-btn>
        </v-col>

        <v-col>
          <v-btn
            depressed
            dark
            color="#b86840"
            class="white-border rounded-lg"
          >
            Initiate Withdrawal
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
