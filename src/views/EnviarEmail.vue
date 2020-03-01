<template>
  <v-container fluid>
    <v-layout justify-center class="mt-5">
      <v-card width="50%" height="50%" elevation="6">
        <v-toolbar color="#727272">
          <v-toolbar-title class="ml-10">
            <h1 class="font-weight-light white--text">Enviar Email</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-row justify="center" class="mt-5">
          <v-col cols="8">
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
          <div style="width:25%;">
            <v-btn color="#00A82A" class="white--text" tile block @click="enviarEmail">Enviar!</v-btn>
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
    ...mapState("email", ["snackbar", "mensagem"])
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