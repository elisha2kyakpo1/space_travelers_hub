import * as MISSIONS_API from '../api/missionsApi';

const FETCH_API = 'FETCH_API';
const RESERVE_MISSION = 'RESERVE_MISSION';
const CANCEL_MISSION = 'CANCEL_MISSION';

export const fetchMissions = (payLoad) => ({
  type: FETCH_API,
  payLoad,
});
export const reserveMission = (id) => ({
  type: RESERVE_MISSION,
  id,
});

export const cancelMission = (id) => ({
  type: CANCEL_MISSION,
  id,
});

export const getMissionsApi = () => async (dispatch) => {
  const missions = await MISSIONS_API.getMissions();
  if (missions) {
    dispatch(fetchMissions(missions));
  }
};
