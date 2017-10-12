function fetchingInvestments() {
  return {
    type: "FETCHING_INVESTMENTS"
  }
}

function fetchedInvestments(investments) {
  return {
    type: "FETCHED_INVESTMENTS",
    payload: investments
  }
}

export function fetchInvestments() {
  return function(dispatch) {
    dispatch(fetchingInvestments())
    fetch('http://localhost:3000/investments')
      .then((res) => res.json())
      .then((json) => {
        const investments = json
        dispatch(fetchedInvestments(investments))
      })
  }
}