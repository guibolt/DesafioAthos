<template>
  <v-row justify="center">
    <v-card width="70%" height="25%" class="white" shaped>
      <v-layout row wrap>
       
        <v-flex xs12 md6>
          
          <div class="ml-5 black--text headline mt-2">
                 {{index+1}})
            <v-icon x-large  left color="black ">domain</v-icon>
            {{condo.nomeCondominio}}
          </div>
        </v-flex>
        <v-flex xs6 sm4 md6>
          <div class="black--text headline mt-2">{{condo.administradora.nomeAdministradora}}</div>
        </v-flex>
      </v-layout>
    </v-card>
  </v-row>
</template>

<script>
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
  }
};
</script>

<style>
</style>