import * as MISSIONS_API from '../api/missionsApi';

const FETCH_API = 'FETCH_API';
const FETCH_API = 'SELECTED_MISSIONS';

export const fetchMissions = (payLoad) => ({
  type: FETCH_API,
  payLoad,
});
export const selectedMissions = (payLoad) => ({
  type: SELECTED_MISSIONS,
  payLoad,
});

export const getMissionsApi = () => async (dispatch) => {
  const missions = await MISSIONS_API.getMissions();
  if (missions) {
    dispatch(fetchMissions(missions));
  }
};
