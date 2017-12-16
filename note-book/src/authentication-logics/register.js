export const register = (username, password) => {
  return Promise
  .resolve()
  .then( () => {
    return fetch(`//sea-info6250-crud.herokuapp.com/users/test/${username}`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({password: password})
    })
  })
};
