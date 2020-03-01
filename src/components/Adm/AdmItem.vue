<template>
  <v-card color="#727272" class="mt-5" shaped>
    <v-row justify="center">
      <v-icon x-large color="white" left>house</v-icon>
      <v-card-title :class="ajustaTituloCard">
        <span class="white--text mx-3">{{adm.nomeAdministradora}}</span>
      </v-card-title>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "AdmItem",
  props: {
    adm: {
      type: Object,
      required: true
    },
    ajustaTituloCard: {
      type: String,
      required: true
    }
  }
};
</script>
