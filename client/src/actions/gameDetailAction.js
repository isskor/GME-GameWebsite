import { gameDetailsURLS, gameScreenshotURLS, api } from '../api';

export const loadDetail = (id) => async (dispatch) => {
  // toggle loading state
  dispatch({
    type: 'LOADING_DETAIL',
  });

  const detailData = await api.get('/', {
    params: {
      url: gameDetailsURLS(id),
    },
  });
  const screenShotData = await api.get('/', {
    params: { url: gameScreenshotURLS(id) },
  });

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
