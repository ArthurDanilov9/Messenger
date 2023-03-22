import HeaderMessager from "../JhonDialog/HeaderMessager";
import MessageListContainer from "./MessageListContainer";
import FooterMessagerContainer from "./FooterMessagerContainer";

const JhonDialog = (props) => {

    

    return (
        <div className="jhon-dialog">
            <HeaderMessager />
            <MessageListContainer />
            <FooterMessagerContainer />
        </div>
    )
}

export default JhonDialog;