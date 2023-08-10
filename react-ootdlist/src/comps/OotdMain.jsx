import { useEffect, useState } from "react";
import { initData } from "../data/initData";
import "../css/Ootd.css";
import OotdInput from "./OotdInput";
import OotdList from "./OotdList";
import uuid from "react-uuid";
import OotdSugList from "./OotdSugList";

const OotdMain = () => {
  const [ootd, setOotd] = useState(() => initData());
  const [ootdList, setOotdList] = useState(() => {
    return localStorage.getItem("OOTDLIST")
      ? JSON.parse(localStorage.getItem("OOTDLIST"))
      : [];
  });

  useEffect(() => {
    const resetOotd = () => {
      setOotd(initData());
      console.log("Use Effect");
      localStorage.setItem("OOTDLIST", JSON.stringify(ootdList));
    };
    resetOotd();
  }, [ootdList]);

  const ootdListAdd = (content) => {
    const newOotd = { ...ootd, id: uuid(), content: content };
    setOotdList([...ootdList, newOotd]);
  };

  const itemComplete = (id) => {
    const compOotdList = ootdList.map((item) => {
      if (item.id === id) {
        return { ...item, complete: !item.complete };
      }
      return item;
    });
    setOotdList([...compOotdList]);
  };

  // ootd id 에 해당하는 데이터 삭제하기
  const itemDelete = (id) => {
    if (window.confirm("룩을 삭제 하시 겠습니까 o_<?")) {
      const deleteOotdList = ootdList.filter((item) => {
        return item.id !== id;
      });
      setOotdList([...deleteOotdList]);
    }
  };

  const updateItemSelect = (id) => {
    const selectOotdList = ootdList.filter((item) => {
      return item.id === id;
    });
    setOotd({ ...selectOotdList[0] });
  };

  const ootdInput = (content) => {
    if (!ootd.id) {
      ootdListAdd(content);
    } else {
      const updateOotdList = ootdList.map((item) => {
        if (item.id === ootd.id) {
          return { ...item, content: content };
        }
        return item;
      });
      setOotdList(updateOotdList);
    }
  };
  return (
    <div className="ootd">
      <OotdInput ootd={ootd} setOotd={setOotd} ootdInput={ootdInput} />
      <OotdSugList />
      <OotdList
        ootdList={ootdList}
        itemComplete={itemComplete}
        itemDelete={itemDelete}
        updateItemSelect={updateItemSelect}
      />
    </div>
  );
};
export default OotdMain;
