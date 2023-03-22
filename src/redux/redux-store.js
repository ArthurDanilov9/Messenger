import { combineReducers, legacy_createStore as createStore } from "redux";
import EdwardReducer from "./EdwardReducer";
import JhonReducer from "./JhonReducer";

let reducers = combineReducers({

    EdwardDialog: EdwardReducer,
    JhonDialog: JhonReducer,

})

let store = createStore(reducers);


export default store;