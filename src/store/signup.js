import { create } from "zustand";

const useSignupStore = create(set => ({
  data: {},
  updateData: (payload) => set(state => ({ ...state, data: { ...state.data, ...payload } })),
}));

export default useSignupStore;
