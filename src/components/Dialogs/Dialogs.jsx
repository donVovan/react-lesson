import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
  return (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
              <div className={s.dialog + ' ' + s.active}>
                  Vovan
              </div>
              <div className={s.dialog}>
                  Sanches
              </div>
              <div className={s.dialog}>
                  Лена
              </div>
              <div className={s.dialog}>
                  Миша
              </div>
              <div className={s.dialog}>
                  Лёша
              </div>
          </div>
          <div className={s.messages}>
              <div className={s.message}>Hi</div>
              <div className={s.message}>How are you?</div>
              <div className={s.message}>Yo</div>
          </div>
      </div>
  )
}

export default Dialogs;