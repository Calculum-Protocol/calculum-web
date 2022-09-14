<template>
  <ClearButton
    :text="isConnected ? 'CONNECTED' : 'CONNECT WALLET'"
    class="ml-3 pa-3"
    style="font-size: 20px;"
    v-on:handleClickClearButton="handleClickMetaMask"
  />
</template>

<script setup>
import ClearButton from "@/components/ClearButton.vue";
import MetaMaskOnboarding from "@metamask/onboarding";
import { ethers } from "ethers";
import { onMounted, ref } from "vue";
import { useMetaMaskStore } from "@/stores/metamask";

const depositAmount = ref(0);
const isConnected = ref(false);
const metaMaskStore = useMetaMaskStore();
const onboarding = new MetaMaskOnboarding();

onMounted(() => {
  init();
});

async function init() {
  console.log("init");

  if (MetaMaskOnboarding.isMetaMaskInstalled()) {
    if (metaMaskStore.account !== "") {
      console.log("CONNECTED", metaMaskStore.account);

      isConnected.value = true;
      onboarding.stopOnboarding();
    } else {
      console.log("DISCONNECTED");
    }

    window.ethereum.on("accountsChanged", requestAccounts);
  } else {
    console.log("METAMASK NOT INSTALLED");
  }
}

function requestAccounts() {
  console.log("requestAccounts");

  window.ethereum
    .request({ method: "eth_requestAccounts" })
    .then((accounts) => {
      metaMaskStore.setAccount(accounts);

      isConnected.value = true;
    })
    .catch((e) => console.log(e));
}

function handleClickMetaMask() {
  if (isConnected.value)
    disconnectWallet()
  else
    connectWallet()
}

function connectWallet() {
  if (!isConnected.value) {
    requestAccounts();
  }
}

function disconnectWallet() {
  metaMaskStore.disconnect();

  isConnected.value = false;
}

async function depositAsset() {
  const contractAbi = [
    "function deposit(uint256 assets, address receiver) public returns (uint256)"
  ];

  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const contractAddress = "0x9956150D4065892cC28b34C588Cb08e9eD01a2C9";
  const contract = new ethers.Contract(contractAddress, contractAbi, provider);
  const signer = provider.getSigner();
  const signerAddress = await signer.getAddress();
  const contractWithSigner = contract.connect(signer);

  await contractWithSigner.deposit(depositAmount.value, signerAddress);
}
</script>
