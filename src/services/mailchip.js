// Constants
import API from '../constants/api';

// Utils
import { authorizedHeaders } from './utils';

export async function postEmail(body) {
  const authHeaders = authorizedHeaders();
  return fetch(`${API.base}${API.routes.newReservation}`, {
    method: 'POST',
    body: JSON.stringify({ ...body }),
    headers: authHeaders,
  });
}
