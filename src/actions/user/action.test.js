import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {userAction} from './action';
import {ActionType} from './action';
import {APIEndpoints} from '../../constants/constants';

describe(`Operation works correctlly`, ()=> {
  test(`Should make a correct API call to /login`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const userLoginer = userAction.login({});

    apiMock
      .onPost(APIEndpoints.LOGIN)
      .reply(200, {fake: true});

    return userLoginer(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_PROFILE,
          payload: {fake: true},
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.SET_AUTH_STATUS,
          payload: false,
        });
      });
  });

  test(`Should make a correct API call to /favorites`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const loaderMovies = userAction.loadFavoriteMovies();

    apiMock
      .onGet(APIEndpoints.FAVORITE)
      .reply(200, [{fake: true}]);

    return loaderMovies(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_FAVORITES,
          payload: [{fake: true}]
        });
      });
  });
});
