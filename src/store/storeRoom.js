
import { createStore } from "vuex";
import { notification } from './data/notification'
import { department } from './data/department'
import { auth } from './data/auth'
import {modal} from './data/modal'
import { spec } from "./data/spec";
import { room } from "./data/room";

const store = createStore({
    modules: {
        notification,
        department,
        auth,
        modal,
        spec,
        room
    }
})


export default store;