<template>
  <div>
    <v-row justify="start">
      <h1 class="titulo" :style="ajustaTitulo">Administradoras</h1>
    </v-row>
    <v-row justify="center" align="center" class="mt-10" v-if="loading">
      <h1 class="font-weight-light display-2">Carregando...</h1>
    </v-row>

    <v-layout justify-center v-else class="mt-10">
      <v-card elevation="8" :width="ajustaCard" height="350" >
        <v-row justify="center">
          <div :style="ajustaDiv" class="mt-3">
          <AdmItem v-for="(adm, index) in listaAdms" :key="index" :adm="adm" :ajustaTituloCard="ajustaTituloCard"/>
          </div>
        </v-row>
      </v-card>
    </v-layout>
  </div>
</template>

<script>
import {retornaMobile,ajustaTitle} from "@/commum/util"
import { mapActions, mapState, mapGetters } from "vuex";
import AdmItem from '@/components/Adm/AdmItem'
export default {
  name: "Administradoras",
  components:{
    AdmItem
  },
  computed: {
    ...mapState("adm", ["listaAdms", "loading"]),
    ajustaTitulo(){
      return retornaMobile() ? "font-size:40px; margin-bottom: 5%;": ""
    },
    ajustaCard(){
      return retornaMobile() ? "100%" : "70%"
    },
    ajustaDiv(){
        return retornaMobile() ? "width:80%;" : "width:60%;"
    },
    ajustaTituloCard(){
      return retornaMobile() ? "body-2": ""
    }
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