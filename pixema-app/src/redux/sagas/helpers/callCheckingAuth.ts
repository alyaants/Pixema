import { ApiResponse } from "apisauce";
import { call, put } from "redux-saga/effects";
import { ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY } from "../../../utiles/constants";
import API from "../../../utiles/api/index";
import { RefreshResponseData } from "../../@types";
import { logoutUser, setAccessToken } from "../../reducers/authSlice";

export default function* callCheckingAuth(apiCall: any, ...params: any) {
  const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN_KEY);

  if (accessToken && refreshToken) {
    const response: ApiResponse<any> = yield call(
      apiCall,
      accessToken,
      ...params
    );
    const { status: accessStatus } = yield call(API.verifyToken, accessToken);

    if (response.status === 401 && accessStatus === 401) {
      // случай, уогда access умер - данныее не получены
      const { status: refreshStatus } = yield call(
        API.verifyToken,
        refreshToken
      );
      if (refreshStatus === 401) {
        // если refresh умер - тут логают
        yield put(logoutUser()); // LOG OUT USER
      } else {
        // если refresh живой - то можно жить дальше
        const newAccessResponse: ApiResponse<RefreshResponseData> = yield call(
          API.refreshToken,
          refreshToken
        ); // пытаемся возродить access token
        if (newAccessResponse.ok && newAccessResponse.data) {
          // проверим все ли хорошо с нашим запросом прошло на новый access
          const { access } = newAccessResponse.data;
          localStorage.setItem(ACCESS_TOKEN_KEY, access);
          const newResponse: ApiResponse<any> = yield call(
            apiCall,
            access,
            ...params
          ); // новый запрос с новым токеном -возвращаем уже любой
          yield put(setAccessToken(access));
          return newResponse; // отдаем юзеру данные, которые уже получили с валидным токном  - данные получены
        } else {
          // елси не ок с запросом новый access - логаут
          yield put(logoutUser()); // LOG OUT USER
        }
      }
    } else {
      // если дело не в токене, тогда просто тогда просто возвращаем наш респонс, пускай сага выше разбирается сама
      return response;
    }
  } else {
    // если нет какого-то из токенов - тогда логаут
    yield put(logoutUser()); // LOG OUT USER
  }
}
