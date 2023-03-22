import { connect } from "react-redux";
import MessagesList from "./MessagesList";


let mapStatetoProps = (state) => {
    return {
        EdwardDialog: state.EdwardDialog
    }
}

let MessageListContainer = connect(mapStatetoProps)(MessagesList);

export default MessageListContainer;