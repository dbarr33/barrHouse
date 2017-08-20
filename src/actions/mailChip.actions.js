import { CREATE_EMAIL } from '../constants/actions';

export function createEmail(payload) {
  return {
    type: CREATE_EMAIL,
    payload
  };
}
