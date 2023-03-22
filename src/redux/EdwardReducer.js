let initialState = {

        MessageList: [

        ],

        MessageText: "",
}


let EdwardReducer= (state = initialState, action) => {
    switch (action.type) {
      case "EDWARD-CHANGE-MESSAGE-TEXT":
        return {
          ...state,
          MessageText: action.EdwardnewMsgText,
        };
      case "EDWARD-SEND-MESSAGE-TEXT":
        if (state.MessageText.trim() === "") {
          return state;
        }
        let newMymessageSend = { message: state.MessageText };
        return {
          ...state,
          MessageList: [...state.MessageList, newMymessageSend],
          MessageText: "",
        };
      default:
        return state;
    }
  };

export const EdwardChangeMessageActionCreator = (text) => {
    return { type: "EDWARD-CHANGE-MESSAGE-TEXT", EdwardnewMsgText: text }
}

export const EdwardSendMessageActionCreator = (text) => {
    return { type: "EDWARD-SEND-MESSAGE-TEXT" }
}

export default EdwardReducer;