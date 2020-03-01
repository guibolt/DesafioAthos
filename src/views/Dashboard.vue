<template>
  <v-container fluid>
    <v-layout justify-center>
      <v-card elevation="10" width="72.5%" shaped color="grey">
        <h1
          class="text-center mx-auto my-3 white--text font-weight-light display-2"
          style="font-family:Raleway;"
        >{{retornaMomento}} e seja bem-vindo(a)!</h1>
      </v-card>
    </v-layout>

    <v-row justify="start" style="margin:10%;">
      <h1 class="red--text font-weight-light mb-8">Aqui você pode visualizar:</h1>

      <v-container class="m-t5">
        <v-row justify="space-around">
          <CardsDashboard />
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import CardsDashboard from "@/components/Layout/CardsDashboard";
export default {
  components: {
    CardsDashboard
  },

  computed: {
    retornaMomento() {
      let data = new Date().getHours();
      let tempo;
      if (data > 5 && data < 12) tempo = "Bom dia";
      else if (data > 12 && data < 18) tempo = "Boa tarde";
      else tempo = "Boa noite";

      return tempo;
    }
  }
};
</script>

<style>
</style>