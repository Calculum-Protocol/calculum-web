<template>
  <v-sheet
    color="#3c3c3c"
    class="pa-2"
    style="border: 1px solid white; height: 100%;"
  >
    <v-container>
      <slot name="title" />
      <slot name="body" />
    </v-container>
  </v-sheet>
</template>
