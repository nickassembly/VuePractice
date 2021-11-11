export default {
    namespaced: true,
    state: {
        message: "Test"
    },
    getters: {
        SHOW_MESSAGE: state => state.message.length > 0
    },
    mutations: {
        SET_MESSAGE(state, message) {
            state.message = message
        },
        CLEAR_MESSAGE(state) {
            state.message = ""
        }
    },
    actions: {

    }

}