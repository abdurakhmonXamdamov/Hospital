import { api } from "@/helpers/api"
export const department = {
    state: () => ({
        departments: []
    }),
    getters: {
        departments(state) {
            return state.departments
        },
        activeDepartments(state) {
            return state.departments.filter(dep => dep.status == 1)
        }        
    },
    mutations: {
        setDepartments(state, list) {
            state.departments = [...list]
        },
        addDepartment(state, newData) {
            state.departments = [newData, ...state.departments]
        },
        removeDepartment(state, id) {
            state.departments = state.departments.filter(department => department._id !== id)
        },
        saveDepartment(state, upData) {
            state.departments = state.departments.map(department => {
                if (department._id == upData._id) return upData
                return department
            })
        }
    },
    actions: {
        async allDepartments({ commit }) {
            const { data } = await api.get('department')
            commit('setDepartments', data)
        },
        async newDepartment({ commit }, payload) {
            const { data } = await api.post('department', payload)
            commit('addDepartment', data)
            commit('setNotif', {
                title: 'Yangi bo`lim qo`shildi'
            })
        },
        async removeDepartment({ commit }, id) {
            await api.delete(`department/${id}`)
            commit('removeDepartment', id)
            commit('setNotif', {
                title: 'Bo`lim o`chirildi',
                status: 'error'
            })
        },
        async saveDepartment({ commit }, payload) {
            const { data } = await api.put('department', payload)
            commit('saveDepartment', data)
            commit('setNotif', {
                title: 'Bo`lim ma`lumotlar yangilandi',
            })
        },
        async changeStatusDepartment({ commit }, payload) {
            const { data } = await api.put('department', payload)
            commit('saveDepartment', data)
            commit('setNotif', {
                title: 'Bo`lim holati yangilandi',
            })
        },
        async getDepartment(dispatch, id) {
            return await api.get(`department/${id}`)
        }
    }
}