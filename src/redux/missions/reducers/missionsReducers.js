const initialState = [];

const missionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_API': {
      const loadedBooks = Object.entries(action.payLoad).map(([key, value]) => {
        console.log(action.payLoad);
        return {
          item_id: key,
          ...value,

        };
      });

      return loadedBooks;
    }
    default:
      return state;
  }
};

export default missionsReducer;
