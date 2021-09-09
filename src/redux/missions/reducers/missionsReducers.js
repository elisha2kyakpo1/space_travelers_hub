const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_API': {
      // const [loadedMissions] = Object.entries(action.payLoad).map(([key, value]) => ({
      //   item_id: key,
      //   ...value,

      // }));
      // console.log(loadedMissions);

      return action.payLoad.map((mission) => {
        const {
          mission_id: missionId,
          mission_name: missionName,
          description,
        } = mission;
        return { missionId, missionName, description };
      });
      // return [...state, loadedMissions];
    }
    case 'RESERVE_MISSION': {
      console.log(state);
      return state.map((mission) => {
        if (mission.missionId !== action.id) return mission;
        return { ...mission, reserved: true };
      });
    }

    default:
      return state;
  }
};

export default missionsReducer;
