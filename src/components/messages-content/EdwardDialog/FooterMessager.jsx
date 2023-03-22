

const FooterMessager = (props) => {

    let TextMessageChange = (event) => {
        
        let text = event.target.value;
        props.EdwardChangeMessage(text);
    }

    let SendTextMessage = () => {
        props.EdwardSendMessage();
    }

    let SendTextMessageEnter = (event) => {
        if (event.key === 13 || event.which === 13) {
            SendTextMessage();
        }
    }
    
    
    return (
        <div className="footer-messengers-typing">
            <div className="typing-input">
                <input onKeyDown={SendTextMessageEnter} placeholder="Введите текст" value={props.EdwardDialog.MessageText} onChange={TextMessageChange} />
            </div>
            <div className="message-send">
                <img onClick={SendTextMessage}  src="https://e7.pngegg.com/pngimages/731/605/png-clipart-facebook-messenger-logo-social-media-instant-messaging-kik-messenger-social-icons-angle-triangle.png" />
            </div>
        </div>
    )
}

export default FooterMessager;