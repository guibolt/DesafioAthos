import Vue from 'vue'
import Vuex from 'vuex'
import { email } from './modulo.email'
import { usuario } from './modulo.usuario'
import { condo } from './modulo.condominios'
import { adm } from './modulo.adm'


Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    email,
    usuario,
    condo,
    adm
  }
})
