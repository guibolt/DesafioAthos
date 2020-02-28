<template>
  <div class="mainDiv">
    <AppToolbar v-model="drawer" />
    <AppMenu v-model="drawer" />

    <v-container fluid>
      <v-layout>
        <v-flex>
          <slot />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import AppToolbar from "./AppToolbar";
import AppMenu from "./AppMenu";

export default {
  name: "AppLayout",
  components: {
    AppToolbar,
    AppMenu
  },
  data: () => ({
    drawer: false
  })
};
</script>

<style>
</style>
