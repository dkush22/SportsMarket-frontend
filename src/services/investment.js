
export function newInvestment(investmentParams, fetchInvestments, fetchUsers) {
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
      console.log(res)
      if (res.message === "You can't go below $0") {
      window.alert("You do not have enough money for this investment")}
      else if (res.message === "Can't invest with quantity of 0") {
      window.alert("You can't make an investment with a quantity of 0")}
      else {
      fetchInvestments()
      fetchUsers()}}
      )

}


export function deleteInvestment(investmentParams, fetchInvestments, fetchUsers) {
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
    .then(() => fetchUsers())
}


export function modifyInvestment(modifiedInvestmentParams, fetchInvestments, fetchUsers) {
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
    .then(() => fetchUsers())
}