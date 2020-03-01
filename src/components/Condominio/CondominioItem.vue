<template>
  <v-row justify="center">
    <v-card :width="ajustaCard" height="25%" class="white" shaped elevation="10">
      <v-layout row wrap>
        <v-flex xs10 md6>
          <div class="ml-5 black--text headline mt-2">
            <v-row justify="center">
              <div class="font-weight-bold mr-3 mb-2" style="font-size:25px;" v-if="ajustaCard=='90%'">Condominio:</div>
            </v-row>

            {{index+1}})
            <v-icon x-large left color="black " v-if="ajustaCard=='72%'">domain</v-icon>
            {{condo.nomeCondominio}}
          </div>
        </v-flex>
        <v-flex xs10 md6>
          <v-row justify="center">
            <div class="font-weight-bold" style="font-size:25px;" v-if="ajustaCard=='90%'">Administradora:</div>
          </v-row>
          <div
            :class="`black--text headline mt-2 ${addMargin} `"
          >{{condo.administradora.nomeAdministradora}}</div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-row>
</template>

<script>
import { retornaMobile } from "@/commum/util";
export default {
  name: "CondominioItem",
  props: {
    condo: {
      type: Object,
      required: true
    },
    index: {
      type: Number
    }
  },
  computed: {
    ajustaCard() {
      return retornaMobile() ? "90%" : "72%";
    },
    addMargin() {
      return retornaMobile() ? "ml-10" : "";
    }
  },
};
</script>
