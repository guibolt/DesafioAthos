import http from '@/_axios/axios'

export const adm = {
  namespaced: true,
  state: {
    listaAdms: [],
    loading: false,
    falha: null
  },
  getters: {
    retornaAdms: state => state.listaAdms.map(m => m.nomeAdministradora)
  },

  mutations: {
    setaLista: (state, adms) => state.listaAdms = adms,
    carregando: state => state.loading = true,
    carregou: state => state.loading = false,
    casoFalha: (state, statusText) => state.falha = statusText
  },
  actions: {
    async buscarAdms({ commit }) {
      console.log('buscou!')
      commit("carregando");
      await http.get("administradora")
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
  }
}
