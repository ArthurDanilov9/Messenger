
const MessagesList = (props) => {


    let MessageElements = props.JhonDialog.MessageList.map((msg, index) => <div key={index} className="my-message">{msg.message}</div> )

    return (
        <div className="messages-list">
            <div className="jhon-message">

            </div>
            <div className="my-message-content">
                {MessageElements}
                Hey
            </div>
        </div>
    )
}

export default MessagesList;