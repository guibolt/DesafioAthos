<template>
  <div style="width:80%">
    <v-expansion-panel class="mt-5 panel" v-if="email.conteudo">
      <v-expansion-panel-header>
        <span class="font-weight-bold">
          <v-avatar color="red" class="white--text mr-3" size="25">{{retornaInicial(email.de)}}</v-avatar>
          De: {{email.de}}
        </span>
        <span class="font-weight-bold">{{email.assunto}}</span>
      </v-expansion-panel-header>

      <v-expansion-panel-content class="mt-5">
        <v-card>
          <v-card-title>{{email.assunto}}</v-card-title>
          <v-card-subtitle>
            <strong>para:</strong>
            {{email.para}}
          </v-card-subtitle>
          <v-card-text>{{email.conteudo}}</v-card-text>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </div>
</template>

<script>
import { achaInicial } from "@/commum/util";
export default {
  name: "EmailItem",
  props: {
    email: {
      type: Object,
      required: true
    }
  },
  methods: {
    retornaInicial(email) {
      return achaInicial(email).toUpperCase();
    }
  }
};
</script>
