import React from "react";
import { connect } from "react-redux";
import { JhonChangeMessageActionCreator } from "../../../redux/JhonReducer";
import { JhonSendMessageActionCreator } from "../../../redux/JhonReducer";
import FooterMessager from "./FooterMessager";



let mapStatetoProps = (state) => {
    return {
        JhonDialog: state.JhonDialog
    }
}

let mapDispatchtoProps = (dispatch) => {
    return {
        JhonChangeMessage: (text) => {
            dispatch(JhonChangeMessageActionCreator(text))
        },
        JhonSendMessage: () => {
            dispatch(JhonSendMessageActionCreator())
        }
    }
}

let FooterMessagerContainer = connect(mapStatetoProps, mapDispatchtoProps)(FooterMessager);

export default FooterMessagerContainer;