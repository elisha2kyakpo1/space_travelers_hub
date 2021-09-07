import * as MISSIONS_API from '../api/missionsApi';

const FETCH_API = 'FETCH_API';

export const fetchMissions = (payLoad) => ({
  type: FETCH_API,
  payLoad,
});

export const getMissionsApi = () => async (dispatch) => {
  const missions = await MISSIONS_API.getMissions();
  console.log(missions);
  if (missions) {
    dispatch(fetchMissions(missions));
  }
};
