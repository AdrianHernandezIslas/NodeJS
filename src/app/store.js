import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store(
    {
        state: {
            base_url:'http://localhost:3000/',
            data_corridas:{}
        },
        mutations: {
            agregarDato(state,datos) {
                state.data_corridas[datos.key] = datos.value;
            }
        },
        actions: {
            setDatosCorridas({commit},datos){
                commit('agregarDato',datos);
            }
        }
    }
);