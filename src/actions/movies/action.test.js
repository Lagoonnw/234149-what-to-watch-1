import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {moviesAction} from './action';
import {ActionType} from './action';
import {APIEndpoints} from '../../constants/constants';

describe(`Operation works correctlly`, ()=> {
  test(`Should make a correct API call to /films`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const moviesLoader = moviesAction.loadMovies();

    apiMock
      .onGet(APIEndpoints.FILMS)
      .reply(200, [{fake: true}]);

    return moviesLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_MOVIES,
          payload: [{fake: true}],
        });
      });
  });

  test(`Should make a correct API call to /reviews`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const reviewsLoader = moviesAction.loadReviews(56);

    apiMock
      .onGet(`${APIEndpoints.REVIEWS}56`)
      .reply(200, [{fake: true}]);

    return reviewsLoader(dispatch, jest.fn(), api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.SET_REVIEWS,
          payload: [{fake: true}],
        });
      });
  });
});
