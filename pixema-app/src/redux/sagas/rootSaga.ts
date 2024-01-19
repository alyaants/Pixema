import { all } from 'redux-saga/effects'
import movieSaga from './movieSaga'


export default function* rootsaga(){
yield all([movieSaga()])
}