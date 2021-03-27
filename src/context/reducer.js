import { actions } from './actions';

const useReducer = (state, { type, payload }) => {
  switch (type) {
    case actions.initializeEnnara:
      return {
        ...state,
        loading: true,
      };

    case actions.gotEnnara:
      const { players, rewards } = payload;

      return {
        ...state,
        players,
        rewards,
        loading: false,
        initializedEnnara: true,
      };
    
    case actions.initializeHotwartz:
      return {
        ...state,
        loading: true,
      };

    case actions.gotHotwartz:
      const { chart } = payload;

      return {
        ...state,
        chart,
        loading: false,
        initializedHotwartz: true,
      };

    default:
      return state;
  }
};

export default useReducer;
