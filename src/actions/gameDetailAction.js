import axios from 'axios';
import { gameDetailsURLS, gameScreenshotURLS } from '../api';

export const loadDetail = (id) => async (dispatch) => {
  // toggle loading state
  dispatch({
    type: 'LOADING_DETAIL',
  });

  const detailData = await axios.get(gameDetailsURLS(id));
  const screenShotData = await axios.get(gameScreenshotURLS(id));

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
      screen: screenShotData.data,
    },
  });
};
