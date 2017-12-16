export const login = (username, password) => {
  return Promise
  .resolve()
  .then( () => {
    return fetch(`//sea-info6250-crud.herokuapp.com/users/test/${username}/session`, {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({password: password})
    })
  })
};
