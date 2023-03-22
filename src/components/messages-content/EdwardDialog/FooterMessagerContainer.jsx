import { EdwardChangeMessageActionCreator } from "../../../redux/EdwardReducer";
import { EdwardSendMessageActionCreator } from "../../../redux/EdwardReducer";
import FooterMessager from "./FooterMessager";
import { connect } from "react-redux";



let mapStatetoProps = (state) => {
    return {
        EdwardDialog: state.EdwardDialog
    }
}

let mapDispatchtoProps = (dispatch) => {
    return {
        EdwardChangeMessage: (text) => {
            dispatch(EdwardChangeMessageActionCreator(text))
        },

        EdwardSendMessage: () => {
            dispatch(EdwardSendMessageActionCreator())
        }
    }
}


const FooterMessagerContainer = connect(mapStatetoProps, mapDispatchtoProps)(FooterMessager);

export default FooterMessagerContainer;