const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_API': {
      return action.payLoad.map((mission) => {
        const {
          mission_id: missionId,
          mission_name: missionName,
          description,
        } = mission;
        return { missionId, missionName, description };
      });
    }
    case 'RESERVE_MISSION': {
      return state.map((mission) => {
        if (mission.missionId !== action.id) return mission;
        return { ...mission, reserved: true };
      });
    }
    case 'CANCEL_MISSION': {
      return state.map((mission) => {
        if (mission.missionId !== action.id) return mission;
        return { ...mission, reserved: false };
      });
    }

    default:
      return state;
  }
};

export default missionsReducer;
