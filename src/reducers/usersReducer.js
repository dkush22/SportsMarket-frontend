
	var jwtDecode = require('jwt-decode')
	var token = localStorage.getItem('jwtToken')
	var decoded = jwtDecode(token)
function usersReducer(state = {user: {id: decoded.user_id, username: decoded.username, investments: [], isFetching: false}}, action) {
	console.log(state)
  switch (action.type) {
    case "FETCHED_INVESTMENTS":
      return Object.assign({}, state, {user: {id: decoded.user_id, username: decoded.username, investments: action.payload, isFetching: false}} )
    case "FETCHING_INVESTMENTS":
      return Object.assign({}, state, {user: {id: decoded.user_id, username: decoded.username, investments: [], isFetching: true}})
    default:
      return state
  }
}

export default usersReducer
