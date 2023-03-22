import HeaderMessager from "./HeaderMessager";
import MessageListContainer from "./MessageListContainer";
import FooterMessagerContainer from "./FooterMessagerContainer";




const EdwardDialog = (props) => {
    
    return (
        <div className="edward-dialog">
            <HeaderMessager />
            <MessageListContainer />
            <FooterMessagerContainer />
        </div>
    )
}

export default EdwardDialog;