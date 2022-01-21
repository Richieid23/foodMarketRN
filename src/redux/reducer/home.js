const initHome = {
  menus: [],
  makanan: [],
  minuman: [],
};

export const homeReducer = (state = initHome, action) => {
  if (action.type === 'SET_MENUS') {
    return {
      ...state,
      menus: action.value,
    };
  }
  if (action.type === 'SET_MAKANAN') {
    return {
      ...state,
      makanan: action.value,
    };
  }
  if (action.type === 'SET_MINUMAN') {
    return {
      ...state,
      minuman: action.value,
    };
  }
  return state;
};
