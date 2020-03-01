<template>
  <div>
    <v-row justify="start">
      <h1 class="titulo" :style="ajustaTitulo">Condominios</h1>
    </v-row>
     <v-row justify="center" align="center" class="mt-10" v-if="loading">
      <h1 class="font-weight-light display-2">Carregando...</h1>
    </v-row>
    <v-layout justify-center class="mt-8" v-else>
      <v-card :width="ajustaCard" height="450" elevation="10">
        <v-row justify="center" align="center" class="mt-10 mb-5">
          <v-card width="70%" height="25%" class="white">
            <v-layout row wrap v-if="ajustaCard == '70%'">
              <v-flex xs12 md6>
                <div class="body-3 red--text font-weight-bold ml-10">Nome do condomínio</div>
              </v-flex>
              <v-flex xs6 sm4 md6>
                <div class="body-3 red--text font-weight-bold ml-5">Nome da adminstradora</div>
              </v-flex>
            </v-layout>
          </v-card>
        </v-row>
        <CondominioItem v-for="(condo,index) in listaCondominios" :key="index" :condo="condo" :index="index" />
      </v-card>
    </v-layout>
  </div>
</template>
<script>
import {retornaMobile} from "@/commum/util"
import { mapActions, mapState, } from "vuex";
import CondominioItem from "@/components/Condominio/CondominioItem";
export default {
  name: "Condominios",
  components: {
    CondominioItem
  },
  computed: {
    ...mapState("condo", ["listaCondominios", "loading"]),
    ajustaCard(){
      return retornaMobile() ? "100%" : "70%"
    },
      ajustaTitulo(){
      return retornaMobile() ? "font-size:40px;": ""
    },
  
  },
  methods: {
    ...mapActions("condo", ["buscarCondos"])
  },
  async created() {
    await this.buscarCondos();
  }
};
</script>>

<style>
</style>