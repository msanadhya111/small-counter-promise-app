import { data1 } from "./StudentData1";

export const studentDataPromise1 = () => {
  return new Promise((resolve, reject) => {
    resolve(data1);
  });
};
