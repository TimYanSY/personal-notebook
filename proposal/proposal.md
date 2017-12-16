# Proposal Example: Personal Notebook

## Author(s)

Shaoyang Yan

## Description

Personal Notebook is a place where every registered user can see previous notes, add new notes, update previous notes and delete notes.

## Use Cases

1. A logged in user can see his/her previous notes
2. A logged in user can post his/her new notes
3. A logged in user can delete his/her previous notes
4. A logged in user can update his/her previous notes

## Client Service Calls

1. the client will do a GET request to populate the notes of a user
2. the client will do a POST request to add a new note
3. the client will do a DELETE request to delete previous notes
4. the client will do a PUT request to update previous notes

## Server REST API

1. GET /notes/${author}
2. POST /notes
3. DELETE /notes/${id}
4. PUT /notes/${id}

