<template>
  <v-btn
    depressed
    color="#3c3c3c"
    class="white-border pa-2 rounded-lg"
    style="width: inherit; color: #fff;"
    @click="$emit('handleClickClearButton')"
  >
    <slot name="text" />
  </v-btn>
</template>

<script>
export default {
  name: "ClearButton",

  props: {
    text: String,
  },
};
</script>
