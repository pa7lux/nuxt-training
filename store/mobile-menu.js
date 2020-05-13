export const state = () => ({
  mobileOpened: false,
});

// change state from here

export const mutations = {
  toggleMobileMenu(state) {
    return (state.mobileOpened = !state.mobileOpened);
  },
  closeMobileMenu(state) {
    return (state.mobileOpened = false);
  },
};

// get data about my state
export const getters = {
  getMobileMenuState(state) {
    return state.mobileOpened;
  },
};
