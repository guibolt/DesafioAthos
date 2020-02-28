<template>
  <v-container fluid>
      <v-row justify="start">
          <h1 class="titulo" st>Emails</h1>
      </v-row>
                  <v-row justify="center">  
                      <div style="width:20%;">

          <v-btn tile block="" color="green" class="white--text" @click="$router.push('/mandaremail')">
              Nova mensagem
              <v-icon>

              </v-icon>
          </v-btn>
                      </div>
                  </v-row>
<v-layout justify-center class="mt-3">
 <v-expansion-panels  focusable>
     <EmailItem/>
     <EmailItem/>
     <EmailItem/>
     <EmailItem/>
     <EmailItem/>
     <EmailItem/>
     <EmailItem/>
     <EmailItem/>
     <EmailItem/>
 </v-expansion-panels>
</v-layout>
  </v-container>
</template>

<script>
import EmailItem from '@/components/Email/EmailItem'
export default {
components:{
    EmailItem
}
}
</script>

<style scoped>
.titulo{
font-weight: lighter;
margin-left: 15%;
font-size: 70px;
color: red;
}

</style>