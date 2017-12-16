export const check = () => {
  return Promise
  .resolve()
  .then( () => {
    return fetch('//sea-info6250-crud.herokuapp.com/users/test/me', {
      method: 'GET',
      credentials: 'include'
    })
    .then( response => response.ok ? response.json() : response.json().then( err => Promise.reject(err)))
    .then(res => {
      console.log(res);
      return res;
    })
    .catch( err => console.warn(err))
  })
};
