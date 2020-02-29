import http from '@/_axios/axios'

export const condo = {
  namespaced: true,
  state: {
    listaCondominios: [],
    loading: false,
    falha: null
  },

  mutations: {
    setaLista: (state, condos) => state.listaCondominios = condos,
    carregando: (state) => state.loading = true,
    carregou: (state) => state.loading = false,
    casoFalha: (state, statusText) => state.falha = statusText
  },
  actions: {
    async buscarCondos({ commit }) {
      console.log('buscou!')
      commit("carregando");
      await http.get("condominio")
        .then(resp => {
          if (resp.status !== 200)
            return commit("casoFalha", response.statusText);

          console.log("resposta do getTurmas", resp.data);
          commit("setaLista", resp.data);
          commit("carregou")
        })
        .catch(error => {
          console.log("Falha", error);

          commit("casoFalha", error.message);
        });
    },
  },


}