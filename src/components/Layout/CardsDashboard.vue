<template>
  <div>
    <button v-for="card in cards" :key="card.title" @click="$router.push(card.link)" >
      <v-card :color="card.color" width="280" height="150" elevation="6" shaped class="mr-3 mb-3 ml-6">
        <v-card-actions>
          <v-icon x-large>{{card.icon}}</v-icon>
        </v-card-actions>
        <v-card-title class="white--text headline">{{card.title}}</v-card-title>
      </v-card>
    </button>
  </div>
</template>

<script>
export default {
  name: "CardsDashboard",
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
  })
};
</script>
