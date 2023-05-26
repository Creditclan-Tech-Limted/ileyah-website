import create from "zustand";

const useGlobalStore = create(set => ({
  data: {
    isSignupOpen: true
  },
  toggleIsSignupOpen: () => set(state => ({
    ...state, data: { ...state.data, isSignupOpen: !state.data.isSignupOpen }
  })),
  updateData: (payload) => set(state => ({ ...state, data: { ...state.data, ...payload } })),
}));

export default useGlobalStore;
