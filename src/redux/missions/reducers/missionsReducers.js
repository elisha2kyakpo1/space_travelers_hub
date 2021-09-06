const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_API':
      return action.payLoad;
    default:
      return state;
  }
};

export default missionsReducer;
