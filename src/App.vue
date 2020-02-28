<template>
  <v-app>
    <v-content class="mainDiv">
        <router-view />
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App'
}
</script>


<style>
.mainDiv {
  background-size: cover;
  background-position: center;
  width: 100vw !important;
  background: #fff;

}
</style>