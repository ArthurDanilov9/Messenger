/*import JhonReducer from "./JhonReducer";
import EdwardReducer from "./EdwardReducer";

let store = {
    _state: {
        DialogsData: {
            EdwardDialog: {
                MessageList: [
                    
                ],

                MessageText: "",
            },

            JhonDialog: {
                MessageList: [
                    
                ],

                MessageText: ""
            }
        }
    },

    callSubscriber() {

    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this.callSubscriber = observer;
    },

    dispatch(action) {
        this._state.DialogsData = EdwardReducer(this._state.DialogsData, action);
        this._state.DialogsData = JhonReducer(this._state.DialogsData, action);
 
        this.callSubscriber(this.state);
     },

}





export const EdwardChangeMessageActionCreator = (text) => {
    return { type: "EDWARD-CHANGE-MESSAGE-TEXT", EdwardnewMsgText: text }
}

export const EdwardSendMessageActionCreator = (text) => {
    return { type: "EDWARD-SEND-MESSAGE-TEXT" }
}

export const JhonChangeMessageActionCreator = (text) => {
    return { type: "JHON-CHANGE-MESSAGE-TEXT", JhonnewMsgText: text }
}

export const JhonSendMessageActionCreator = (text) => {
    return { type: "JHON-SEND-MESSAGE-TEXT" }
}

export default store;

*/

