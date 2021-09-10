import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import missionsReducer from './redux/missions/reducers/MissionsReducers';
import { rocketReducer } from './redux/rockets/Rockets';

function render(
  ui,
  {
    preloadedState,
    store = configureStore({
      reducer: {
        missions: missionsReducer,
        rocketReducer,
      },
      preloadedState,
    }),
    ...renderOptions
  } = {},
) {
  // eslint-disable-next-line react/prop-types
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from '@testing-library/react';
export { render };
