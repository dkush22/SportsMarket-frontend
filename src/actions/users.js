function fetchingUsers() {
  return {
    type: "FETCHING_USERS"
  }
}

function fetchedUsers(users) {
  return {
    type: "FETCHED_USERS",
    payload: users
  }
}

export function fetchUsers() {
  return function(dispatch) {
    dispatch(fetchingUsers())
    fetch('http://localhost:3000/users')
      .then((res) => res.json())
      .then((json) => {
        const users = json
        dispatch(fetchedUsers(users))
      })
  }
}