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

    case actions.initializeHodwartz:
      return {
        ...state,
        loading: true,
      };

    case actions.gotHodwartz:
      const { chart } = payload;

      return {
        ...state,
        chart,
        loading: false,
        initializedHodwartz: true,
      };

    case actions.initializeMons:
      return {
        ...state,
        loading: true,
      };

    case actions.gotMons:
      const { mons, trainers } = payload;

      return {
        ...state,
        mons,
        trainers,
        loading: false,
        initializedMons: true,
      };

    default:
      return state;
  }
};

export default useReducer;
