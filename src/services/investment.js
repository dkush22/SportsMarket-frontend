
export function newInvestment(investmentParams, fetchInvestments) {
  const body = JSON.stringify(investmentParams)
  return fetch("http://localhost:3000/newinvestment", {
    method: 'post',
    body: body,
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message === "You can't go below $0") {
      window.alert("You do not have enough money for this investment")}
      else {
      fetchInvestments()}}
      )

}


export function deleteInvestment(investmentParams, fetchInvestments) {
  const body = JSON.stringify(investmentParams)
  return fetch("http://localhost:3000/deleteinvestment", {
    method: 'DELETE',
    body: body,
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
    .then((res) => res.json())
    .then(() => fetchInvestments()) 
}


export function modifyInvestment(modifiedInvestmentParams, fetchInvestments) {
  const body = JSON.stringify(modifiedInvestmentParams)
  return fetch("http://localhost:3000/investments", {
    method: 'PATCH',
    body: body,
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
    .then((res) => res.json())
    .then(() => fetchInvestments())
}