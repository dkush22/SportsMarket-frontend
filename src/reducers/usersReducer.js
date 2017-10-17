// if (localStorage.getItem('jwtToken')) {
// 	var jwtDecode = require('jwt-decode')
// 	var token = localStorage.getItem('jwtToken')
// 	var decoded = jwtDecode(token)}
function usersReducer(state = {user: {users: [], investments: [], isFetching: false}}, action) {
  switch (action.type) {
    case "FETCHED_INVESTMENTS":
      return Object.assign({}, state, {user: {users: [...state.user.users], investments: action.payload, isFetching: false}})
    case "FETCHING_INVESTMENTS":
      return Object.assign({}, state, {user: {users: [...state.user.users], investments: [], isFetching: true}})
    case "FETCHED_USERS":
      return Object.assign({}, state, {user: {users: action.payload, investments: [...state.user.investments], isFetching: false}})
    case "FETCHING_USERS":
      return Object.assign({}, state, {user: {users: [], investments: [...state.user.investments], isFetching: true}})
    default:
      return state
  }
}

export default usersReducer
