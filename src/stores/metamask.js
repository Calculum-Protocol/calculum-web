import { defineStore } from "pinia";

export const useMetaMaskStore = defineStore({
  id: "metamask",
  state: () => ({
    account: "",
  }),
  actions: {
    setAccount(account) {
      if (account instanceof String)
        this.account = account;
      else
        this.account = account[0];
    },
    disconnect() {
      this.account = "";
    },
  },
  persist: {
    enabled: true
  },
});
