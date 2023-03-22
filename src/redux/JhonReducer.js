let initialState = {
        MessageList: [

        ],

        MessageText: ""
};

let JhonReducer = (state = initialState, action) => {
    switch (action.type) {
      case "JHON-CHANGE-MESSAGE-TEXT":
        return {
          ...state,
          MessageText: action.JhonnewMsgText,
        };
      case "JHON-SEND-MESSAGE-TEXT":
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

export const JhonChangeMessageActionCreator = (text) => {
    return { type: "JHON-CHANGE-MESSAGE-TEXT", JhonnewMsgText: text }
}

export const JhonSendMessageActionCreator = (text) => {
    return { type: "JHON-SEND-MESSAGE-TEXT" }
}

export default JhonReducer;