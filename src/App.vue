<template>
  <v-app>
    <v-content class="mainDiv">
      <AppLayout>
        <router-view />
      </AppLayout>
    </v-content>
  </v-app>
</template>

<script>
import AppLayout from "@/components/Layout/AppLayout";
export default {
  name: "App",
  components: {
    AppLayout
  }
};
</script>


<style>
.mainDiv {
  background-size: cover;
  background-position: center;
  width: 100vw !important;
  background: #fff;
}
.titulo {
  font-weight: lighter;
  margin-left: 15%;
  font-size: 60px;
  color: black;
}
</style>