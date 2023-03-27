import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

  return <div>
      <div>
          {pages.map(page => {
              return <span
                  className={props.currentPage === page && style.selectedPage}
                  onClick={(event)=> {props.onPageChanged(page);}}>
                       {page}
                   </span>
          })}
      </div>
      {
          props.users.map(user => <div key={user.id}>
              <span>
                  <div>
                      <img alt='' src={user.photos.small != null ? user.photos.small : userPhoto} className={style.userPhoto}/>
                  </div>
                  <div>
                      {user.follower
                          ?
                          <button onClick={() => {
                              props.unfollow(user.id)
                          }}>Unfollow</button>
                          :
                          <button onClick={() => {
                              props.follow(user.id)
                          }}>Follow</button>}

                  </div>
              </span>
              <span>
                  <div>{user.name}</div>
                  <div>{user.status}</div>
              </span>
              <span>
                    <div>{'user.location.country'}</div>
                  <div>{'user.location.city'}</div>

              </span>
          </div>)
      }
  </div>
}

export default Users;