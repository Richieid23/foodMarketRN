const initOrder = {
  orders: [],
};

export const orderReducer = (state = initOrder, action) => {
  if (action.type === 'SET_ORDER') {
    return {
      ...state,
      orders: action.value,
    };
  }
  return state;
};
