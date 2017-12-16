export const deleteNote = (id) => {
  fetch(`notes/${id}`, {
    method: 'DELETE',
  })
};
