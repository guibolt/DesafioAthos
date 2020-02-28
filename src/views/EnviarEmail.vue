<template>
  <v-container fluid>
    <v-layout justify-center class="mt-5">
      <v-card width="50%" height="50%" elevation="6">
        <v-toolbar color="#727272">
          <v-toolbar-title class="ml-10">
            <h1 class="font-weight-light white--text">Enviar Email</h1>
          </v-toolbar-title>
        </v-toolbar>
        <v-row justify="center">
          <v-col cols="8">
            <v-text-field v-model="name" :counter="10" :rules="nameRules" label="Name" required ></v-text-field>
          </v-col>
          <v-col cols="8">
            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
          </v-col>
        </v-row>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>s