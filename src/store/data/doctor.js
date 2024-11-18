import { api } from "@/helpers/api"

export const doctor = {
    state: () => ({
        doctors: []
    }),
    getters: {
        doctors(state) {
            return state.doctors
        },
        activeDoctor(state) {
            return state.doctors.filter(doctor => doctor.status == 1)
        }
    },
    mutations: {
        setDoctors(state, list) {
            state.doctors = [...list]
        },
        addDoctor(state, newData) {
            state.doctors = [newData, ...state.doctors]
        },
        removeDoctor(state, id) {
            state.doctors = state.doctors.filter(doctor => doctor._id !== id)
        },
        saveDoctor(state, upData) {
            state.doctors = state.doctors.map(doctor => {
                if (doctor._id == upData._id) return upData
                return doctor
            })
        }
    },
    actions: {
        async allDoctors({ commit }) {
            const { data } = await api.get('doctor')
            console.log(data);

            commit('setDoctors', data)
        },
        async newDoctor({ commit }, payload) {
            const { data } = await api.post('doctor', payload)
            commit('addDoctor', data)
            commit('setNotif', {
                title: 'Yangi doktor qo`shildi'
            })
        },
        async removeDoctor({ commit }, id) {
            await api.delete(`doctor/${id}`)
            commit('removeDoctor', id)
            commit('setNotif', {
                title: 'Doktor o`chirildi',
                status: 'error'
            })
        },
        async saveDoctor({ commit }, payload) {
            const { data } = await api.put('doctor', payload)
            commit('saveDoctor', data)
            commit('setNotif', {
                title: 'Doktor ma`lumotlar yangilandi',
            })
        },
        async changeStatusDoctor({ commit }, payload) {
            console.log(payload);

            const { data } = await api.put('doctor', payload)
            commit('saveDoctor', data)
            commit('setNotif', {
                title: 'Doktor holati yangilandi',
            })
        },
        async getDoctor(dispatch, id) {
            return await api.get(`doctor/${id}`)
        }

    }
}