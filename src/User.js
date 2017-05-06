import { BASE_URL } from './Url';
import { authHeaders } from './Auth';

export const updateUser = (nickname, cb) => {
  fetch(`${BASE_URL}/auth`, {
    method: 'PUT',
    headers: authHeaders(),
    body: JSON.stringify({ nickname }),
  }).then( res => res.json() )
    .then( () => localStorage.setItem('nickname', nickname) )
    .then( () => cb() )
}
