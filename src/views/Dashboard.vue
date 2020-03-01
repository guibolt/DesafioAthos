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
          <button v-for="card in cards" :key="card.title" @click="$router.push(card.link)">
            <v-card
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
            </v-card>
          </button>
        </v-row>
      </v-container>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    cards: [
      {
        title: "Condomínios ",
        icon: "domain",
        color: "green",
        link: "condominios"
      },
      {
        title: "Administradoras ",
        icon: "emoji_people",
        color: "blue",
        link: "administradoras"
      },
      { title: "Usuários ", icon: "people", color: "orange", link: "usuarios" },
      {
        title: "Emails Enviados ",
        icon: "mail_outline",
        color: "purple",
        link: "veremails"
      }
    ]
  }),

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