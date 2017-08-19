
// Services
import { postEmail } from '../../services/mailchip';
import { request } from '../../services/request';

// Constants

export function* createEmail(action) {
  try {
    yield request(postEmail(action.payload));
  } catch (error) {
    alert(error.message);
  }
}
