import { data2 } from "./StudentData2";

export const studentDataPromise2 = () => {
  return new Promise((resolve, reject) => {
    resolve(data2);
  });
};
