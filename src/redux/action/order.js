import {showMessage} from 'react-native-flash-message';
import {API_HOST} from '../../config';
import {getData} from '../../utills/Storage';

export const getOrders = () => (dispatch) => {
  getData('token').then(async (resToken) => {
    try {
      const res = await fetch(`${API_HOST.url}/order/user`, {
        method: 'GET',
        headers: {
          token: resToken.value,
        },
      });
      const jsonData = await res.json();
      dispatch({type: 'SET_ORDER', value: jsonData.data.order});
    } catch (err) {
      showMessage({message: err.message, type: 'danger'});
    }
  });
};
