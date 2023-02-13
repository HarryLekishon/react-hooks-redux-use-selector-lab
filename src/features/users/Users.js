import React from "react";
import { useSelector } from "react-redux";


function Users() {
  const users = useSelector(state => state.users)
const usersArrays = users.map(user => 
  <li key={user.username}>{user.username}</li>
  )
  return (
    <div>
      <ul>
        Users!
        Users!
        {usersArrays}
        Total Users: {users.length}
      </ul>
    </div>
  );
}

export default Users;
