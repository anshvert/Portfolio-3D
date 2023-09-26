import {create} from 'zustand';
import {infoSlice, sideBarSectionSlice, skillSectionSlice} from './slices';

// Define your state and actions in the store
const useStore = create<any>((set,get,api) => ({
  ...sideBarSectionSlice(set,get,api),
  ...skillSectionSlice(set,get,api),
  ...infoSlice(set,get,api)
}));

export default useStore;