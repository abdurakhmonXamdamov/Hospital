import { api } from "@/helpers/api";
import router from "@/router";

export const auth = {
    stata: () => ({
        user: {},
        isAuth: false
    }),
    getters: {
        user(state){
            return state.user
        }
    },

    mutations: {
        setUser(state, payload){
            state.user = {...payload}
        },

        setIsAuth(state, payload){
            state.isAuth = payload
        }
    },
    actions: {
        async login({ commit }, payload){
                    const { data } = await api.post("auth/login", payload)
                    .catch(error => {
                        console.error(error);
                        commit('setNotif', {
                                title: "Tizimga kirishda hatolik bo`ldi",
                                text: error.response?.data,
                                status: 'error'
                            })
                    })
                    router.push({ name: "dashboard_page" });
                    $cookies.set("hospital__token", data.token);
                    commit('setNotif', { title: 'Xush kelibsiz' })
                    commit('setIsAuth', true)
                    commit('setUser', data.user)
                    
                },
        

        async checkUser({commit}){
            const { data } = await api.post('auth/checkuser')
            .catch(e => {
                console.log('Muammo', e);
                if(e.status == 401){
                    $cookies.remove('hospital__token')
                    router.push({name: 'login'})
                }
            })

            console.log(data);
            commit('setUser', data)
            commit('setIsAuth', true)
            
        },

        async reg({commit}, payload){
            try{
                const {data} = await api.post('auth/reg', payload)
                console.log(data);
                if(data == 'exist'){
                    commit('setNotif', { title: 'Bunday Foydalanuvchi mavjud', text: 'Iltimos qayta urinib ko`ring', status: 'error' })
                    setTimeout(()=>{
                    this.close()
                    }, 3000)
                }else{
                    commit('setNotif', { title: 'Muvaffaqiyatli ro`yhatdan o`tdingiz', text: 'Tizimga kirishingiz mumkun', status: 'error' })
                    router.push({name: 'login'})
                }      
            }catch(error){
                console.error(error)
            }
        },
        logOut({ commit }){
            $cookies.remove('hospital__token')
            commit('setIsAuth', false)
            commit('setUser', {})
            commit('setNotif', {
                title: 'Tizimdan chiqdingiz',
                status: 'error'
            })
            router.push({ name: 'login' })
        }
    }
}