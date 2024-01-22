import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootsaga from "./sagas/rootSaga";
import movieReducer from "./reducers/movieSlice";
import themeReducer from './reducers/themeSlicer';
import authReducer from './reducers/authSlice';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  reducer: {
    themeReducer,
    movieReducer,
    authReducer,
  },
  middleware: [sagaMiddleWare],
});

sagaMiddleWare.run(rootsaga);

export type RootState = ReturnType<typeof store.getState>;

export default store;
