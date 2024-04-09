import { create } from "zustand";
import { persist, createJSONStorage } from 'zustand/middleware'


const useSignupStore = create(
  persist(set => ({
    data: {},
    updateData: (payload) => set(state => ({ ...state, data: { ...state.data, ...payload } })),
  }),
    {
      name: 'signup-store', // unique name
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useSignupStore;