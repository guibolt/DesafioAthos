import http from '@/_axios/axios'

export const usuario = {
    namespaced: true,
    state:{
        listaUsuarios: [],
        loading: false,
        falha: null
    },
    mutations:{
        setaLista:(state,usuarios) => state.listaUsuarios = usuarios,
        carregando:(state) => state.loading = true,
        carregou:(state) => state.loading = false,
        casoFalha:(state, statusText) => state.falha = statusText
    },
    actions:{
        async buscarUsuarios({ commit }) {
            console.log('buscou!')
            commit("carregando");
            await http  .get("usuario")
              .then(resp => {
                if (resp.status !== 200 )
                  return commit("casoFalha", response.statusText);
                
              
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