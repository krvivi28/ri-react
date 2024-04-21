import {incCount as incCountActionLabel} from "../../constants/constants";

export const incCount = (data) => {
  // console.log("data",data);
  return { type: incCountActionLabel, data };
};

