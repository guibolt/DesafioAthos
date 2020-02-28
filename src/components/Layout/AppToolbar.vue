<template>
  <v-app-bar app fixed color="white">
    <v-app-bar-nav-icon @click.stop="$emit('hide', !show)"></v-app-bar-nav-icon>
    <v-toolbar-title>
      <button @click="irParaDashboard" style="outline: none !important">
        <v-img src="@/assets/athos2.png" class="mt-2 logoImg"></v-img>
      </button>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppToolbar",
  props: {
    show: Boolean
  },
  model: {
    prop: "show",
    event: "hide"
  },
  methods: {
    irParaDashboard() {
      if (this.$router.currentRoute.path != "/dashboard")
        this.$router.push("/dashboard");
    }
  }
};
</script>
<style>
@media (max-width: 420px) {
  .logoImg {
    margin-left: 10%;
  }
}
.logoImg {
  max-width: 25vh;
  min-width: 12vh;
  max-height: 15vh;
}
</style>