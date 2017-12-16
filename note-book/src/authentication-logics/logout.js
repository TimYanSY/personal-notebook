export const logout = (username) => {
  return Promise
  .resolve()
  .then( () => {
    return fetch(`//sea-info6250-crud.herokuapp.com/users/test/${username}/session`, {
      method: 'DELETE',
      credentials: 'include',
    })
  })
};
