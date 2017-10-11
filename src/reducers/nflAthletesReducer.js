function nflAthletesReducer(state = { isFetching: false, list: []}, action) {
  switch (action.type) {
    case "FETCHED_NFL_ATHLETES":
      return Object.assign({}, state, {list: action.payload, isFetching: false} )
    case "FETCHING_NFL_ATHLETES":
      return Object.assign({}, state, { isFetching: true})
    default:
      return state
  }
}


export default nflAthletesReducer
