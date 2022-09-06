<template>
  <v-sheet
    color="#3c3c3c"
    class="pa-2"
    style="border: 1px solid white"
  >
    <v-container>
      <v-row>
        <span><span class="text-yellow">VAULT #1:</span> LONG-ONLY MOMENTUM STRATERY</span>
      </v-row>

      <v-row
        class="pt-2"
        style="border-top: 1px solid #fbc216"
      >
        <v-col
          sm="4"
        >
          <p>> DEPOSIT ASSET:</p>
          <p>> CURRENT TVL:</p>
          <p>> TVL CAP:</p>
          <p>> SHARPE RATIO:</p>
          <p>> MAX DRAWDOWN:</p>
        </v-col>

        <v-col
          sm="4"
        >
          <v-row>
            <v-col sm="3">
              <p>USDC</p>
            </v-col>

            <v-col>
              <img src="@/assets/coins/usdc.svg" width="24" />
            </v-col>
          </v-row>
          <p>$50K</p>
          <p>$100K</p>
          <p>1.75 since incention</p>
          <p>-5.0%</p>
        </v-col>

        <v-col class="text-center">
          <v-row>
            <v-col>
              <v-btn
                depressed
                color="primary"
              >
                Vault Details
              </v-btn>
            </v-col>

            <v-col>
              <v-btn
                depressed
                color="primary"
              >
                Your Holdings
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <div
        class="text-center"
        style="border: 1px solid #fbc216; width: 60%; margin: 0 auto;"
      >
        Net AY: <span class="text-yellow">20.0%</span> since inception
      </div>

      <v-row class="text-center mt-2">
        <v-col>
          <v-btn
            depressed
            dark
            color="#958a81"
            class="white-border"
          >
            Initiate Deposit
          </v-btn>
        </v-col>

        <v-col>
          <v-btn
            depressed
            dark
            color="#b86840"
            class="white-border"
          >
            Initiate Withdrawal
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-sheet>
</template>
