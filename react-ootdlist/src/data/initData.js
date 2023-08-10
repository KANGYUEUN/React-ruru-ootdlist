import moment from "moment";

const initData = () => {
  const currentDate = moment();

  return {
    id: null,
    sdate: currentDate.format("YYYY[-]MM[-]DD"),
    stime: currentDate.format("HH:mm:ss"),
    dayOfWeek: currentDate.format("dddd"), // 요일 값 추가
    content: "",
    complete: false,
  };
  // console.log(currentDate.format("dddd"));
};

const func1 = () => {};
const func2 = () => {};
const func3 = () => {};
const func4 = () => {};

export { initData, func1, func2, func3, func4 };
