<template>
  <div>
    <v-row justify="start">
      <h1 class="titulo" :style="ajustaTitulo">Usuários</h1>
    </v-row>

    <v-row justify="center" align="center" class="mt-10" v-if="loading">
      <h1 class="font-weight-light display-2">Carregando...</h1>
    </v-row>

    <div v-else>
      <v-row justify="center" align="center" class="mt-10 mb-5" v-if="!ajustaTitulo">
        <v-card width="80%" height="25%" class="white">
          <v-layout row wrap>
            <v-flex xs12 md3>
              <div class="body-3 black--text font-weight-bold ml-10">Nome</div>
            </v-flex>
            <v-flex xs6 sm4 md3>
              <div class="body-3 black--text font-weight-bold ml-5">Email</div>
            </v-flex>
            <v-flex xs6 sm4 md3 class>
              <div class="body-3 black--text font-weight-bold">Condominio</div>
            </v-flex>
            <v-flex xs6 sm4 md2>
              <div class="body-3 black--text font-weight-bold">Administradora</div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-row>

      <UsuarioItem v-for="(usuario,index) in listaUsuarios" :key="index" :usuario="usuario" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import {retornaMobile} from '@/commum/util'
import UsuarioItem from "@/components/Usuario/UsuarioItem";
export default {
  name: "Usuarios",
  components: {
    UsuarioItem
  },
  computed: {
    ...mapState("usuario", ["listaUsuarios", "loading"]),
     ajustaTitulo(){
      return retornaMobile() ? "font-size:40px; margin-bottom: 5%;": ""
    },
  },
  methods: {
    ...mapActions("usuario", ["buscarUsuarios"])
  },
  async created() {
    await this.buscarUsuarios();
  }
};
</script>
<style >
</style>