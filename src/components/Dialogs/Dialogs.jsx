import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({updateNewMessageBody, dialogsPage, sendMessage}) => {

    let state = dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMessageBody = state.newMessageBody;

    let newMessageElement = React.createRef();

    const onSendMessageClick = () => {
        sendMessage();
    }

    const onNewMessageChange = (event) => {
        let body = event.target.value;
        updateNewMessageBody(body);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems + ' ' + style.active}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
            </div>
            <div className={style.textarea}>
                <div>
                    <textarea
                        placeholder='Enter Your Message'
                        ref={newMessageElement}
                        onChange={onNewMessageChange}
                        value={newMessageBody}
                    />
                </div>
                <div>
                    <button className={style.btn} onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;