import {showMessage} from 'react-native-flash-message';
import {API_HOST} from '../../config';

export const getMenuData = () => async (dispatch) => {
  try {
    const response = await fetch(`${API_HOST.url}/menu`);
    const jsonData = await response.json();
    if (jsonData.status === 'success') {
      dispatch({type: 'SET_MENUS', value: jsonData.data.menus});
    } else {
      showMessage({
        message: jsonData.message,
        type: 'danger',
        backgroundColor: '#d9435e',
      });
    }
  } catch (err) {
    console.error(err.message);
  }
};

export const getMenuDataByTypes = (types) => async (dispatch) => {
  try {
    const response = await fetch(`${API_HOST.url}/menu/type/${types}`);
    const jsonData = await response.json();
    if (jsonData.status === 'success') {
      if (types === 'Makanan') {
        dispatch({type: 'SET_MAKANAN', value: jsonData.data.menus});
      }
      if (types === 'Minuman') {
        dispatch({type: 'SET_MINUMAN', value: jsonData.data.menus});
      }
    } else {
      showMessage({
        message: jsonData.message,
        type: 'danger',
        backgroundColor: '#d9435e',
      });
    }
  } catch (err) {
    console.error(err.message);
  }
};
