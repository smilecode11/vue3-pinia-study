import { defineStore } from "pinia"

export const globalStatusStore = defineStore("globalStatus", {
    state: () => {
        return {
            isLoading: false,
        }
    },
    getters: {},
    actions: {
        changeIsLoading(){
            this.isLoading = !this.isLoading;
        }
    }
})