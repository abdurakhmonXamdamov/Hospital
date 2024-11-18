export const modal = {
    state: () => ({
        toggle: false,
        confirmToggle: false,
        logoutConfirm: false,
        id: '',
        editToggle: false
    }),
    getters: {
        logoutConfirm(state){
            return state.logoutConfirm
        },
        id(state) {
            return state.id
        },
        editToggle(state) {
            return state.editToggle
        },
        confirmToggle(state) {
            return state.confirmToggle
        },
        toggle(state) {
            return state.toggle
        }
    },
    mutations: {
        setLogoutConfirm(state,payload){
            state.logoutConfirm = payload
        },
        setEdit(state, { id, editToggle }) {
            state.id = id
            state.editToggle = editToggle
        },
        setConfirmToggle(state, payload) {
            state.confirmToggle = payload
        },
        setToggle(state, payload) {
            state.toggle = payload
            if (!payload) {
                state.id = ''
                state.editToggle = false
            }
        }
    }
}