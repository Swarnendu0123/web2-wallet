import { atom } from "recoil";

export const history = atom({
  key: 'history', 
  default: [0, 1000, 2000, 1000, 3000, 5000, 3000, 4000], 
});


export const time = atom({
  key: 'time', 
  default: [0, 1, 2, 3, 4, 5, 6, 7],
});