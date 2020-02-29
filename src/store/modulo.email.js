import http from '@/_axios/axios'

export const email = {
    namespaced: true,
    state: {
        listaEmails: [],
        loading: false,
        falha: null
    },
    mutations: {
        setaLista: (state, emails) => state.listaEmails = emails,
        carregando: (state) => state.loading = true,
        carregou: (state) => state.loading = false,
        casoFalha: (state, statusText) => state.falha = statusText
    },
    actions: {
        async buscarEmails({ commit }) {
            console.log('buscou!')
            commit("carregando");
            await http.get("email")
                .then(resp => {
                    if (resp.status !== 200)
                        return commit("casoFalha", response.statusText);

                    commit("setaLista", resp.data);
                    commit("carregou")
                })
                .catch(error => {
                    console.log("Falha", error);

                    commit("casoFalha", error.message);
                });
        },
        async mandarEmail({commit},email){
            console.log('mandando email!')
            await http.put("email",email,null).then(resp =>{
                console.log(resp)
            })
        }
    }
}