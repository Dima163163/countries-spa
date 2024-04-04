import {
  SET_COUNTRY,
  SET_ERROR,
  SET_LOADING,
  CLEAR_DETAILS,
  SET_NEIGHBORS,
} from './detail-actions';

const initialState = {
  status: 'idle', // loading | received | rejected
  error: null,
  currentCountry: null,
  neighbors: [],
};
export const detailReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_COUNTRY:
      return {
        ...state,
        status: 'received',
        currentCountry: payload,
      };
    case SET_LOADING:
      return {
        ...state,
        status: 'loading',
        error: null,
      };
    case SET_ERROR:
      return {
        ...state,
        status: 'rejected',
        error: payload,
      };
    case CLEAR_DETAILS:
      return initialState;
    case SET_NEIGHBORS:
      return {
        ...state,
        neighbors: payload,
      }

    default:
      return state;
  }
};
