export function newInvestment(investmentParams) {
  const body = JSON.stringify(investmentParams)
  return fetch("http://localhost:3000/photoupload", {
    method: 'post',
    body: body,
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
    .then((res) => res.json())

}