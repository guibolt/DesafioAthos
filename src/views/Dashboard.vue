<template>
  <v-container fluid>
    <AppLayout />
    <v-layout justify-center>
      <v-card elevation="10" width="72.5%" shaped >
        <h1
          class="text-center mx-auto my-3 grey--text font-weight-bold display-2"
        style="font-family:Raleway;">{{retornaMomento}} e seja bem vindo(a)!</h1>
      </v-card>
    </v-layout>
  
    <v-row justify="start" style="margin:10%;">
      <h1 class="red--text font-weight-light">Nossas especialidades:</h1>

      <v-container class="mt-5">
        <v-row justify="space-around">
          <v-card
            v-for="card in cards"
            :key="card.title"
            :color="card.color"
            width="280"
            height="150"
            elevation="6"
            shaped
            class="mr-3 mb-3"
          >
            <v-card-actions>
              <v-icon x-large>{{card.icon}}</v-icon>
            </v-card-actions>
            <v-card-title class="white--text headline">{{card.title}}</v-card-title>

            <v-card-subtitle class="white--text headline" v-if="card.subtitle">{{card.subtitle}}</v-card-subtitle>
          </v-card>
          <div style="width:35%; margin-top: 5%;">
            <v-btn color="#eb5258" block>
              <a
                href="https://www.athos.com.br/#"
                style=" text-decoration: none; color:white;"
              >Saiba Mais!</a>
            </v-btn>
          </div>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
import AppLayout from "@/components/Layout/AppLayout";
export default {
  data: () => ({
    cards: [
      {
        title: "Admistração de  ",
        icon: "domain",
        color: "green",
        subtitle: "Condomínios"
      },
      { title: "Admistração de Bens ", icon: "emoji_people", color: "blue" },
      { title: "Fornecedores ", icon: "people", color: "orange" },
      { title: "Imobiliárias ", icon: "house", color: "light-green" }
    ]
  }),
  components: {
    AppLayout
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