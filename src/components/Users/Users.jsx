import React from "react";
import style from './Users.module.css';
import axios from "axios";
import userPhoto from '../../assets/images/user.png'


const Users = ({users, follow, unfollow, setUsers}) => {
    if (users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
            setUsers(response.data.items)
        });

    }


    return <div>
        {
            users.map(user => <div key={user.id}>
              <span>
                  <div>
                      <img src={user.photos.small != null ? user.photos.small : userPhoto} className={style.userPhoto}/>
                  </div>
                  <div>
                      {user.follower
                          ?
                          <button onClick={() => {
                              unfollow(user.id)
                          }}>Unfollow</button>
                          :
                          <button onClick={() => {
                              follow(user.id)
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