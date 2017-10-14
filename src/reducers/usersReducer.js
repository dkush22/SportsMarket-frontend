// if (localStorage.getItem('jwtToken')) {
// 	var jwtDecode = require('jwt-decode')
// 	var token = localStorage.getItem('jwtToken')
// 	var decoded = jwtDecode(token)}
function usersReducer(state = {user: {id: 1, username: "Daniel", investments: [], isFetching: false}}, action) {
  switch (action.type) {
    case "FETCHED_INVESTMENTS":
      return Object.assign({}, state, {user: {id: 1, username: "Daniel", investments: action.payload, isFetching: false}} )
    case "FETCHING_INVESTMENTS":
      return Object.assign({}, state, {user: {id: 1, username: "Daniel", investments: [], isFetching: true}})
    default:
      return state
  }
}

export default usersReducer
