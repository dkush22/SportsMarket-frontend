function usersReducer(state = {user: {id: 1, username: "Daniel", investments: [], isFetching: false}}, action) {
  switch (action.type) {
    case "FETCHED_INVESTMENTS":
      return Object.assign({}, state, {user: {investments: action.payload, isFetching: false}} )
    case "FETCHING_INVESTMENTS":
      return Object.assign({}, state, {user: { isFetching: true}})
    default:
      return state
  }
}

export default usersReducer
