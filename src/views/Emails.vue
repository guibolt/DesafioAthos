<template>
  <div>
    <v-row justify="start">
      <h1 class="titulo" st>Emails</h1>
    </v-row>
    <v-row justify="center">
      <div style="width:20%;">
        <v-btn tile block color="green" class="white--text" @click="$router.push('/mandaremail')">
          Nova mensagem
          <v-icon></v-icon>
        </v-btn>
      </div>
    </v-row>
    <v-row justify="center" align="center">
      <v-progress-circular
      v-if="loading"
      style="margin-top:10%;"
      :size="100"
      color="black"
      indeterminate
    ></v-progress-circular>
      <v-expansion-panels inset focusable>
        <EmailItem v-for="(email,index) in listaEmails " :key="index" :email="email" />
      </v-expansion-panels>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import EmailItem from "@/components/Email/EmailItem";
export default {
  name: "Emails",
  components: {
    EmailItem
  },
  computed: {
    ...mapState("email", ["listaEmails", "loading"])
  },
  methods: {
    ...mapActions("email", ["buscarEmails"])
  },
  async created() {
    await this.buscarEmails();
  }
};
</script>

<style scoped>

</style>