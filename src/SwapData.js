import { useEffect, useState } from "react";
import { studentDataPromise1 } from "./StudentDataPromise1";
import { studentDataPromise2 } from "./StudentDataPromise2";
import styles from "./SwapData.module.css";

export const SwapData = () => {
  const [leftData, setLeftData] = useState([]);
  const [rightData, setRightData] = useState([]);
  useEffect(() => {
    const formingData = async () => {
      const studentData1 = await studentDataPromise1();
      const studentData2 = await studentDataPromise2();
      const studentData = [...studentData1, ...studentData2];
      const uniqueId = [];
      const uniqueData = [];
      studentData.forEach((data) => {
        if (uniqueId.indexOf(data.id) > 0) return;
        uniqueId.push(data.id);
        data.checked = false;
        uniqueData.push(data);
      });
      setLeftData(uniqueData);
    };
    formingData();
  }, []);
  const checkboxChangeHandler = (event) => {
    const { studentData, checked } = event.target;
    studentData.checked = checked;
  };
  return (
    <div className="container">
      <div className="box">
        <div className="centered">
          {leftData.map((data) => {
            return (
              <label className={styles.label} key={data.id} htmlFor={data.id}>
                <input
                  studentData={data}
                  onChange={checkboxChangeHandler}
                  type="checkbox"
                  id={data.id}
                />
                {data.name}
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
};
