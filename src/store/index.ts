import { defineStore } from 'pinia'
import { globalStatusStore } from './globalStatus'

export const mainStore = defineStore('main', {
    state: () => {
        return {
            msg: 'hello pinia!',
            count: 0
        }
    },
    getters: {
        getCountBuff(state) {
            console.log("_getter")
            return `${state.count}***${state.msg}`
        },
        getGlobalStatusIsLoading() {
            // 访问其它 store 中的状态
            return globalStatusStore().isLoading
        }
    },
    actions: {
        changeState() {
            this.count++;
            this.msg = this.count % 2 === 0 ? 'hello pinia' : 'hello world'
        },
        changeGlobalStatusState() {
            return globalStatusStore().changeIsLoading()
        }
    }
})
