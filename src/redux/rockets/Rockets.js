const GET_ROCKET = 'space_travelers_hub/rockets/ADD_ROCKET';

const LoadRockets = (payload) => ({
  type: GET_ROCKET,
  payload,
});

const rocketReducer = (state = [], action) => {
  switch (action.type) {
    case GET_ROCKET:
      return action.payload.map((item) => {
        const {
          rocket_id: id,
          rocket_name: name,
          flickr_images: flickrImages,
          description,
        } = item;
        return {
          id, name, flickrImages, description,
        };
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
  rocketReducer,
  getRocketData,
};
