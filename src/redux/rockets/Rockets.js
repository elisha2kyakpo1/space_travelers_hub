const GET_ROCKET = 'space_travelers_hub/rockets/GET_ROCKET';
const RESERVE_ROCKET_TICKET = 'space_travelers_hub/rockets/RESERVE_ROCKET_TICKET';
const CANCEL_ROCKET_TICKET = 'space_travelers_hub/rockets/CANCEL_ROCKET_TICKET';
const LEAVE_MISSION = 'space_travelers_hub/rockets/LEAVE_MISSION';

const LoadRockets = (payload) => ({
  type: GET_ROCKET,
  payload,
});

const reserveRocketTicket = (id) => ({
  type: GET_ROCKET,
  id,
});

const cancelRocketTicket = (id) => ({
  type: CANCEL_ROCKET_TICKET,
  id,
});

const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKET:
      return action.payload.map((rocket) => {
        const {
          rocket_id: id,
          rocket_name: name,
          flickr_images: flickrImages,
          description,
        } = rocket;
        return {
          id, name, flickrImages, description,
        };
      });
    case RESERVE_ROCKET_TICKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: true };
      });
    case CANCEL_ROCKET_TICKET:
      return state.map((rocket) => {
        if (rocket.id !== action.id) return rocket;
        return { ...rocket, reserved: false };
      });
    default:
      return state;
  }
};

const getRocketData = () => (dispatch) => {
  fetch('https://api.spacexdata.com/v3/rockets')
    .then((response) => response.json())
    .then((json) => dispatch(LoadRockets(json)));
};

export {
  LoadRockets,
  reserveRocketTicket,
  rocketReducer,
  getRocketData,
  cancelRocketTicket,
  leaveMission,
};
