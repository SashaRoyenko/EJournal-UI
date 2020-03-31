import { url, getQuery } from './constants';

export async function getUsers() {
  return fetch(`${url}users/`, getQuery).then((response) =>
    response.ok ? response.json() : [],
  );
}

export async function getUserById(id) {
  return fetch(`${url}users/user/${id}`, getQuery).then((response) =>
    response.ok ? response.json() : {},
  );
}
