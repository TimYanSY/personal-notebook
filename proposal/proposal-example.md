# Proposal Example: Shared Wishlists

## Author(s)

Jane Student
John Student

## Description

Shared Wishlist is a place where users can create and share "wishlists" - list of things they want to have complete, which might be tasks, items, anything that can be "done" for someone else and they aren't picky about who does it.

## Use Cases

1. A logged in user can create a list to be publicly visible
2. A visitor (no login required) can see the list of a user
3. A logged in user can mark items on anothers' list as completed

## Client Service Calls

1. the client will do a GET request to populate the items of a list
2. the client will do a POST request to create a list
3. the client will do a DELETE request to mark an item on a list as completed
(Other calls will be involved as well)

## Server REST API

1. GET /list/${user}
2. POST /list/${user}
3. DELETE /list/${user}/${itemId}
