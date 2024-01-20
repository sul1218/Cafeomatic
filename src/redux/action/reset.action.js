import {createActions} from 'reduxsauce';

const {Types, Creators} = createActions({
  resetStates: [],
});

export const resetTypes = Types;
export const resetCreators = Creators;
