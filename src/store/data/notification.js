
export const notification = {
    state: () => ({
        notif: {
            status: 'success',
            title: '',
            text: ''
        }
    }),
    getters: {
        getNotif(state) {
            return state.notif
        }
    },
    mutations: {
        setNotif(state, payload) {
            state.notif = {
                ...state.notif,
                ...payload
            }
            setTimeout(() => {
                state.notif = {
                    status: 'success',
                    title: '',
                    text: ''
                }
            }, 3000)
        },
        clearNotif(state) {
            state.notif = {
                status: 'success',
                title: '',
                text: ''
            }
        }
    }
}
