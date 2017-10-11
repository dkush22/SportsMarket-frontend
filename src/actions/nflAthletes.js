function fetchingNFLAthletes() {
  return {
    type: "FETCHING_NFL_ATHLETES"
  }
}

function fetchedNFLAthletes(nflAthletes) {
  return {
    type: "FETCHED_NFL_ATHLETES",
    payload: nflAthletes
  }
}

export function fetchNFLAthletes() {
  return function(dispatch) {
    dispatch(fetchingNFLAthletes())
    fetch('http://localhost:3000/nfl_athletes')
      .then((res) => res.json())
      .then((json) => {
        const nflAthletes = json
        dispatch(fetchedNFLAthletes(nflAthletes))

      })
  }
}

export function searchNFLAthletes(name) {
  return function (dispatch) {
    dispatch(fetchingNFLAthletes())
    fetch(`http://localhost:3000/nfl_athletes/${name.split(' ')[0]}%20${name.split(' ')[1]}`)
      .then((res) => res.json())
      .then((json) => {
      	const nflAthletes = [json]
        dispatch(fetchedNFLAthletes(nflAthletes))
      })
  }

}