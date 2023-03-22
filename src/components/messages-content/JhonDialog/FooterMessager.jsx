import React from "react";


class FooterMessager extends React.Component {

    TextMessageChange = (event) => {
        let text = event.target.value;
        this.props.JhonChangeMessage(text);
    }

    SendTextMessage = () => {
        this.props.JhonSendMessage();
    }

    SendTextMessageEnter = (event) => {
        if (event.key === 13 || event.which === 13) {
            this.SendTextMessage();
        }
    }


    render() {
        return (
            <div className="footer-messengers-typing">
                <div className="typing-input">
                    <input onKeyDown={this.SendTextMessageEnter} placeholder="Введите текст" value={this.props.JhonDialog.MessageText} onChange={this.TextMessageChange} />
                </div>
                <div className="message-send">
                    <img onClick={this.SendTextMessage}  src="https://e7.pngegg.com/pngimages/731/605/png-clipart-facebook-messenger-logo-social-media-instant-messaging-kik-messenger-social-icons-angle-triangle.png" />
                </div>
            </div>
        )
    }
}

export default FooterMessager;