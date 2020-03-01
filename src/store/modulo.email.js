import http from '@/_axios/axios'

export const email = {
    namespaced: true,
    state: {
        listaEmails: [],
        loading: false,
        falha: null,
        snackbar: false,
        mensagem: null
    },
    mutations: {
        setaLista: (state, emails) => state.listaEmails = emails,
        carregando: (state) => state.loading = true,
        carregou: (state) => state.loading = false,
        casoFalha: (state, statusText) => state.falha = statusText,
        ativaSnack: state => state.snackbar = true,
        setaMensagem: (state, msg) => state.mensagem = msg,
        desativaSnack: state => state.snackbar = false
    },
    actions: {
        async buscarEmails({ commit }) {

            commit("carregando");
            await http.get("email")
                .then(resp => {
                    if (resp.status !== 200)
                        return commit("casoFalha", response.statusText);

                    commit("setaLista", resp.data);
                    commit("carregou")
                })
                .catch(error => {


                    commit("casoFalha", error.message);
                });
        },
        async mandarEmail({ commit }, email) {
            await http.put("email", email, null).then(resp => {
                commit('ativaSnack')
                if (resp.status !== 200) {
                    commit('setaMensagem', "Erro ao enviar email")
                    return commit("casoFalha", response.statusText);
                }

                commit('setaMensagem', "Email enviado com sucessso, voltando ao dashboard.")

            })
        }
    }
}