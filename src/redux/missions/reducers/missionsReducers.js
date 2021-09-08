const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_API': {
      const loadedBooks = Object.entries(action.payLoad).map(([key, value]) => ({
        item_id: key,
        ...value,

      }));

      return loadedBooks;
    }
    case 'SELECTED_MISSIONS': {
      console.log(action.payLoad);
      return action.payLoad;
    }

    default:
      return state;
  }
};

export default missionsReducer;