import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import routes from './routes.js'

Vue.use(Vuex);

export default new Vuex.Store({
    state:{
        token: null,
        user: null,
        cars: []
    },
    mutations:{
        storeTokenInApp(state, myToken){
            state.token = myToken;
        },
        storeUserInApp(state, myUser){
            state.user = myUser
        },
        storeCars(state, myCars){
            state.clothes = myCars
        },
        clearAuthData(state){
            state.token = null;
            state.user = null;
        }

    },
    actions:{
        getCars({commit}){
            axios.get('/cars')
            .then((myResponse)=>{
                console.log("responses from getCars action", myResponse);
                commit('storeCars', myResponse.data)
            })
            .catch(()=>{
                console.log("error in getCars action")
            })
        },
        logout({commit, state}){
            axios.post('/supplier/logout', null, {
                headers:{
                    Authorization: `Bearer ${state.token}`
                }
            });

            commit('clearAuthData');

            routes.replace("/");


        }

    }

})