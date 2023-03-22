

const MessagesList = (props) => {

    const messageElements = props.EdwardDialog.MessageList.map((msg, index) => (
        <div key={index} className="my-message">
            {msg.message}
        </div>
    ));

    return (
        <div className="messages-list">
            <div className="edward-message">

            </div>
            <div className="my-message-content">
                {messageElements}
            </div>
        </div>
    )
}

export default MessagesList;