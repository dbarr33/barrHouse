import { CLEAR_USER_FORM, CREATE_EMAIL, END_EMAIL } from '../../constants/actions';

const initialState = {
  firstName: null,
  lastName: null,
  phoneNumber: null,
  email: null,
  range: null,
  isActive: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case CLEAR_USER_FORM:
      return { isActive: false };
    case CREATE_EMAIL:
      return {
        ...state,
        isActive: true,
      }
    case END_EMAIL:
      return {
        ...state,
        isActive: false
      }
    case 'CHANGE_USER_PROPERTY':
      const propertyUpdate = {};
      propertyUpdate[action.payload.property] = action.payload.value;
      return Object.assign({}, state, propertyUpdate);
    default:
      return state;
  }
}
