import { connect } from "react-redux";
import MessagesList from "./MessagesList";


let mapStatetoProps = (state) => {
    return {
        JhonDialog: state.JhonDialog
    }
}

let MessageListContainer = connect(mapStatetoProps)(MessagesList);

export default MessageListContainer;