const sheets = require('./sheets');
const { getSheet } = sheets;

const hodwartzSpreadsheet = process.env.ENNARA_SHEET;

const getChart = () =>
  getSheet(hodwartzSpreadsheet, 'Hodwartz!A2:C')
    .then(
      (response) =>
        (response || []).reduce(
          ({ chart }, [house, points, color]) => ({
            chart: [
              ...chart,
              {
                house,
                points: parseInt(points),
                color,
              },
            ],
          }),
          {
            chart: [],
          }
        ).chart
    )
    .catch((error) => error);

module.exports = {
  getChart,
};
