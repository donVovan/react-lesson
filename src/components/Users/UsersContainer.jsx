import React, {useId} from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {followAC, setUsersAC, unfollowAC} from "../../redux/usersReducer";

const mapStateToProps = (state) => {
  return {
      users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      follow: (useId)=> {
          dispatch(followAC(useId))
      },
      unfollow: (useId)=> {
          dispatch(unfollowAC(useId))
      },
      setUsers: (users)=>{
          dispatch(setUsersAC(users))
      }
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Users);