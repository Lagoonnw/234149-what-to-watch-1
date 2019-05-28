import MockAdapter from 'axios-mock-adapter';
import {createAPI} from '../../api';
import {Operation} from './action';
import {ActionType} from './action';
import {APIEndpoints} from '../../constants/constants';

describe(`Operation works correctlly`, ()=> {
  test(`Should make a correct API call to /films`, () => {
    const dispatch = jest.fn();
    const api = createAPI(dispatch);
    const apiMock = new MockAdapter(api);
    const moviesLoader = Operation.loadMovies();

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
});
