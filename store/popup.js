export const state = () => ({
  popupShown: false,
});

// change state from here

export const mutations = {
  togglePopUp(state) {
    return (state.popupShown = !state.popupShown);
  },
};

// get data about my state
export const getters = {
  getPopupShown(state) {
    return state.popupShown;
  },
};
