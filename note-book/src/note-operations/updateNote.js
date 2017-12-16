export const updateNote = (id, author, text) => {
  const current = new Date();
  const time = current.toLocaleString();
  const newNote = {author: author, text: text, time: time};

  fetch(`/notes/${id}`, {
    method: 'PUT',
    body: JSON.stringify(newNote),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    })
  })
};
