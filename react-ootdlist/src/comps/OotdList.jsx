import OotdItem from "./OotdItem";

// 사용자가 기록하는 List
const OotdList = (props) => {
  const { ootdList, itemComplete, itemDelete, updateItemSelect } = props;

  const ootdItemList = ootdList.map((ootd) => {
    return (
      <OotdItem
        item={ootd}
        key={ootd.id}
        itemComplete={itemComplete}
        itemDelete={itemDelete}
        updateItemSelect={updateItemSelect}
      />
    );
  });
  return <>{ootdItemList}</>;
};

export default OotdList;
