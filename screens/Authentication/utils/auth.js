async function authenticate(mode, email, password) {
    url = "";
    if (mode == "signInWithPassword") {
      return await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {
          "Content-Type": "application/json"
        },
      })
        .then((res) => res.json())
        .then((data) => {
          return(data.body.access_token)})
        .catch((err) => console.log(err));
    }
  }
  
  export async function createUser(email, password) {
    return await authenticate("signUp", email, password);
  }
  
  export async function login(email, password) {
    return await authenticate("signInWithPassword", email, password);
  }