import { useContext, useEffect } from 'react';
import { actions } from './actions';
import { checkSavedData, saveData } from './saveData';
import Context from './store';

const key = 'beronzz-hodwartz';
const expirationKey = `${key}:expiration`;

const chartKey = `${key}:chart`;

const chartUrl = '/.netlify/functions/simple-be/chart';

const fetchChart = async () => {
  const saved = sessionStorage.getItem(chartKey);
  if (saved) return JSON.parse(saved);

  const chart = await (await fetch(chartUrl)).json();
  return chart;
};

const useHodwartz = () => {
  const { state, dispatch } = useContext(Context);
  const { initializedHodwartz, loading } = state;

  useEffect(() => {
    if (!initializedHodwartz && !loading) {
      dispatch({ type: actions.initializeHodwartz });

      const savedChart = checkSavedData(expirationKey, chartKey);

      if (savedChart) {
        return dispatch({
          type: actions.gotHodwartz,
          payload: { chart: savedChart },
        });
      }

      fetchChart().then((chart) => {
        saveData(chart, chartKey, expirationKey);

        return dispatch({
          type: actions.gotHodwartz,
          payload: { chart },
        });
      });
    }
  }, [initializedHodwartz, loading, dispatch]);
};

export default useHodwartz;
