<template>
  <v-container fluid>
    <v-layout justify-center :class="ajustaLayout">
      <v-card :width="ajustaCard" height="50%" elevation="6">
        <v-toolbar color="#727272">
          <v-toolbar-title class="ml-10">
            <h1 class="font-weight-light white--text">Enviar Email</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-row justify="center" :class="ajustaLayout">
          <v-col :cols="ajustaForm">
            <v-select
              :items="retornaAdms"
              label="Selecione a adiministradora"
              color="grey"
              filled
              outlined
            ></v-select>
            <v-select :items="moradores" label="Selecione o morador" color="grey" outlined filled></v-select>
            <v-text-field
              v-model="email.assunto"
              filled
              color="grey"
              label="Digite o assunto do email"
            ></v-text-field>
            <v-textarea
              v-model="email.conteudo"
              auto-grow
              filled
              label="Conteúdo"
              rows="3"
              color="grey"
            ></v-textarea>
          </v-col>
        </v-row>
        <v-row justify="space-around" class="mb-5">
          <div :style="ajustaBotao">
            <v-btn color="#00A82A" class="white--text mb-5" tile block @click="enviarEmail">Enviar!</v-btn>
          </div>

          <v-btn text @click="$router.push('/')">
            Voltar para o dashboard
            <v-icon right large class="ml-5" color="rgba(1, 134, 251, 1) ">keyboard_return</v-icon>
          </v-btn>
        </v-row>
      </v-card>
      <v-snackbar v-model="snackbar" top multi-line>
        {{mensagem}}
        <v-btn color="white" text @click="snackbar = false">Fechar</v-btn>
      </v-snackbar>
    </v-layout>
  </v-container>
</template>

<script>
import { retornaMobile, } from "@/commum/util";
import { mapGetters, mapActions, mapState, mapMutations } from "vuex";
export default {
  name: "EnviarEmail",
  data: () => ({
    moradores: ["morador@athos.com.br", "segundomorador@athos.com.br"],
    email: {
      de: "",
      assunto: "",
      conteudo: "",
      para: ""
    }
  }),
  computed: {
    ...mapGetters("adm", ["retornaAdms"]),
    ...mapState("email", ["snackbar", "mensagem"]),
    ajustaCard() {
      return retornaMobile() ? "100%" : "50%";
    },
    ajustaForm() {
      return retornaMobile() ? "10" : "8";
    },
    ajustaBotao() {
      return retornaMobile() ? "width:55%;" : "width:25%;";
    },
    ajustaLayout() {
      return retornaMobile() ? "" : "mt-5";
    }
  },
  methods: {
    ...mapActions("adm", ["buscarAdms"]),
    ...mapActions("email", ["mandarEmail"]),
    ...mapMutations("email", ["desativaSnack"]),
    async enviarEmail() {
      await this.mandarEmail(this.email);
      setTimeout(() => {
        this.desativaSnack();
        this.$router.push("/");
      }, 1000);
    }
  },
  async created() {
    await this.buscarAdms();
  }
};
</script>

<style>
</style>s