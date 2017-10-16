export function newInvestment(investmentParams) {
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

}


export function DeleteInvestment(investmentParams) {
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

}