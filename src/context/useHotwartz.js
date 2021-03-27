import { useContext, useEffect } from 'react';
import { actions } from './actions';
import { checkSavedData, saveData } from './saveData';
import Context from './store';

const key = 'beronzz-hotwartz';
const expirationKey = `${key}:expiration`;

const chartKey = `${key}:chart`;

const chartUrl = '/.netlify/functions/simple-be/chart';

const fetchChart = async () => {
  const saved = sessionStorage.getItem(chartKey);
  if (saved) return JSON.parse(saved);

  const chart = await (await fetch(chartUrl)).json();
  return chart;
};

const useHotwartz = () => {
  const { state, dispatch } = useContext(Context);
  const { initializedHotwartz, loading } = state;

  useEffect(() => {
    if (!initializedHotwartz && !loading) {
      dispatch({ type: actions.initializeHotwartz });

      const savedChart = checkSavedData(expirationKey, chartKey);

      if (savedChart) {
        return dispatch({
          type: actions.gotHotwartz,
          payload: { chart: savedChart },
        });
      }

      fetchChart().then(
        (chart) => {
          saveData(chart, chartKey, expirationKey);

          return dispatch({
            type: actions.gotHotwartz,
            payload: { chart },
          });
        }
      );
    }
  }, [initializedHotwartz, loading, dispatch]);
};

export default useHotwartz;
