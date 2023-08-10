const OotdItem = (props) => {
  const { item, itemComplete, itemDelete, updateItemSelect } = props;

  const compClickHandler = (e, id) => {
    itemComplete(id);
  };

  const deleteClickHandler = (e, id) => {
    itemDelete(id);
  };

  const contentClickHandler = (e, id) => {
    updateItemSelect(id);
  };

  return (
    <div className="item">
      <div className="delete" onClick={(e) => deleteClickHandler(e, item.id)}>
        &times;
      </div>
      <div className="sdate">
        <div>{item.sdate}</div>
        <div>{item.dayOfWeek}</div>
        <div>{item.stime}</div>
      </div>
      <div
        onClick={(e) => contentClickHandler(e, item.id)}
        className={item.complete ? "content line" : "content"}
      >
        {item.content}
      </div>
      <div className="complete" onClick={(e) => compClickHandler(e, item.id)}>
        &#9829;
      </div>
    </div>
  );
};

export default OotdItem;
