<template>
  <v-row justify="center" >
    <v-card shaped width="80%" class="mb-5" elevation="10">
      <v-layout row wrap :class="`pa-3 `">
        <v-flex xs12 md3>
          <div class="body-3 red--text ml-5">
            <v-icon large class="mx-5">person</v-icon>
            {{usuario.nome}}
          </div>
        </v-flex>
        <v-flex xs6 sm4 md3>
          <div class="body-3 grey--text ml-5">{{usuario.email}}</div>
        </v-flex>
        <v-flex xs6 sm4 md3 class>
          <div class="body-3 grey--text">{{usuario.condominio.nomeCondominio}}</div>
        </v-flex>
        <v-flex xs6 sm4 md2>
          <div class="body-3 grey--text">{{usuario.condominio.administradora.nomeAdministradora}}</div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-row>
</template>

<script>
export default {
  name: "UsuarioItem",
  props: {
    usuario: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>