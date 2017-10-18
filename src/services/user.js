export function loginUser(loginParams) {
  const body = JSON.stringify(loginParams)
  return fetch("http://localhost:3000/login", {
    method: 'post',
    body: body,
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
    .then((res) => res.json())

}


export function logoutUser() {
  localStorage.removeItem("jwtToken")
  localStorage.removeItem("user_id")
}


export function findUserId() {
  console.log(this.props)
}

export function signUpUser(signUpParams) {
    const body = JSON.stringify(signUpParams)
  return fetch("http://localhost:3000/signup", {
    method: 'post',
    body: body,
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
    .then((res) => res.json())
}
