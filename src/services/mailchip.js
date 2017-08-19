// Constants
import API from '../constants/api';

// Utils
import { authorizedHeaders } from './utils';

export async function postEmail({ user, place, question, range_response, binary_response, }) {
  const authHeaders = authorizedHeaders();
  return fetch(`${API.mailChip}$${API.routes.campaign}`, {
    method: 'GET',
    headers: authHeaders,
  });
}
