import { defineStore } from 'pinia'

export const mainStore = defineStore('main', {
    state: () => {
        return {
            msg: 'hello pinia!',
            count: 0
        }
    },
    getters: {},
    actions: {
        // increment: (state, { step = 1 }) => {
        // }
    }
})
