import create from 'zustand';
import sideBarSectionSlice from './slices';

// Define your state and actions in the store
const useStore = create<any>((set,get,api) => ({
  ...sideBarSectionSlice(set,get,api),
}));

export default useStore;