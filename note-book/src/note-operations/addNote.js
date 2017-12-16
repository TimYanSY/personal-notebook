export const addNote = (author, text) => {
  const current = new Date();
  const time = current.toLocaleString();
  const newNote = {author: author, text: text, time: time};

  fetch('/notes', {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    }),
    body: JSON.stringify(newNote)
  })
  .then(
    function(response) {
      if(response.ok) {
        return response.json();
      } else {
        response.json().then( err => {
          Promise.reject(err);
        })
      }
    }
  )
  .then((res) => {
    console.log(res);
  })
  .catch(err => console.log(err));
}
