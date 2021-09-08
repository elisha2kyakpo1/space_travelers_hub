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
    case 'SELECTED_MISSIONS': {
      console.log(action.payLoad);
      return [{ ...state, missions: action.payLoad }];
    }

    default:
      return state;
  }
};

export default missionsReducer;
