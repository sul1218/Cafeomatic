import {createReducer} from 'reduxsauce';
import initialStates from '../store/initialStates';
import {communityTypes} from '../../screen/Community/redux/community.action';

export const INITIAL_STATE = initialStates.loadingStates;

const loginStateStart = state => ({
  ...state,
  loginLoading: true,
});

const loginStateEnd = state => ({
  ...state,
  loginLoading: false,
});


export const HANDLERS = {
 
  // [communityTypes.JOIN_EVENT]: joinEventLoadingStart,
  // [communityTypes.JOIN_EVENT_SUCCESS]: joinEventLoadingEnd,
  // [communityTypes.JOIN_EVENT_FAILURE]: joinEventLoadingEnd,
};
export default createReducer(INITIAL_STATE, HANDLERS);
