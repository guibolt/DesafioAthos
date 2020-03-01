<template>
  <v-row justify="center" >
    <v-card shaped :width="ajustaCard" class="mb-5" elevation="10">
      <v-layout row wrap v-if="ajustaCard == '80%'">
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
       <v-layout row wrap class="ml-5" v-else>
          <v-flex xs12 md6>
            <div class="body-3 black--text font-weight-bold">Nome</div>
            <div class="red--text">{{ usuario.nome}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="body-3  black--text font-weight-bold">Email</div>
            <div class="grey--text">{{usuario.email}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="body-3  black--text font-weight-bold">Condomínio</div>
            <div class="grey--text">{{usuario.condominio.nomeCondominio}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
               <div class="body-3  black--text font-weight-bold">Administradora</div>
              <div class="grey--text">{{usuario.condominio.administradora.nomeAdministradora}}</div>
          </v-flex>
        </v-layout>
    </v-card>
  </v-row>
</template>

<script>
import {retornaMobile} from '@/commum/util'
export default {
  name: "UsuarioItem",
  props: {
    usuario: {
      type: Object,
      required: true
    }
  },
  computed:{
    ajustaCard(){
      return retornaMobile() ? "95%" : "80%"
    }
  }
};
</script>
