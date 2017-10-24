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

export function searchNFLAthletesByName(name) {
  return function (dispatch) {
    dispatch(fetchingNFLAthletes())
    fetch('http://localhost:3000/nfl_athletes')
      .then((res) => res.json())
      .then((json) => {
      	const nflAthletes = json
        const filtered =nflAthletes.filter(player => player.name.toLowerCase().includes(name.toLowerCase()))
        dispatch(fetchedNFLAthletes(filtered))
      })
  }
}

export function searchNFLAthletesByPosition(position) {
  return function (dispatch) {
    dispatch(fetchingNFLAthletes())
    fetch('http://localhost:3000/nfl_athletes')
      .then((res) => res.json())
      .then((json) => {
        const nflAthletes = json
        const filtered =nflAthletes.filter(player => player.position.toLowerCase().includes(position.toLowerCase()))
        console.log(filtered)
        dispatch(fetchedNFLAthletes(filtered))
      })
  }
}