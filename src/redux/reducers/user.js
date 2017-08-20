import { CLEAR_USER_FORM } from '../../constants/actions';

const initialState = {
  firstName: null,
  lastName: null,
  phoneNumber: null,
  email: null,
  range: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CLEAR_USER_FORM:
      return {};
    case 'CHANGE_USER_PROPERTY':
      const propertyUpdate = {};
      propertyUpdate[action.payload.property] = action.payload.value;
      return Object.assign({}, state, propertyUpdate);
    default:
      return state;
  }
}
