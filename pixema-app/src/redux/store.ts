import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga'
import rootsaga from './sagas/rootSaga'
import movieReducer from './reducers/movieSlice'

const sagaMiddleWare = createSagaMiddleware()

const store = configureStore({
    reducer: {
    movieReducer
    },
    middleware : [sagaMiddleWare],
});

sagaMiddleWare.run(rootsaga)

export type RootState = ReturnType<typeof store.getState>

export default store