<template>
  <div>
    <v-row justify="start">
      <h1 class="titulo" st>Administradoras</h1>
    </v-row>
    <v-row justify="center" align="center" class="mt-10" v-if="loading">
      <h1 class="font-weight-light display-2">Carregando...</h1>
    </v-row>

    <v-layout justify-center v-else>
      <v-card elevation="8" width="70%" height="450" >
        <v-row justify="center">
          <div style="width:80%;" class="mt-3">
            <v-card color="#727272" class="mt-5" v-for="(adm, index) in listaAdms" :key="index" shaped>
              <v-row justify="center">
                <v-icon x-large color="white" left>house</v-icon>
                <v-card-title class="display-1">
                    <span class="white--text mx-3">{{adm.nomeAdministradora}}</span>
                </v-card-title>
              </v-row>
            </v-card>
          </div>
        </v-row>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  name: "Administradoras",
  computed: {
    ...mapState("adm", ["listaAdms", "loading"])
  },
  methods: {
    ...mapActions("adm", ["buscarAdms"])
  },
  async created() {
    await this.buscarAdms();
  }
};
</script>

<style>
</style>