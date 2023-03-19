import React from "react";
import style from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = ({state, addMessage, dialogsPage, updateNewMessageText}) => {
    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>)

    let newMessageElement = React.createRef();

    const addNewMessage = () => {
     addMessage();
    }

    const onMessageChange = () => {
      let text = newMessageElement.current.value;
      updateNewMessageText(text)
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems + ' ' + style.active}>
                { dialogsElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
            </div>
            <div className={style.textarea}>
                <div>
                    <textarea
                        ref={newMessageElement}
                        onChange={onMessageChange}
                        value={dialogsPage.newMessageText}
                    />
                </div>
                <div>
                    <button className={style.btn} onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;