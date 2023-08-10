// import { useState } from "react";

const OotdInput = (props) => {
  const { ootd, setOotd, ootdInput } = props;

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setOotd({ ...ootd, content: value });
  };

  const btnClickHandler = (e) => {
    ootdInput(ootd.content);
  };

  return (
    <div className="input">
      <input
        placeholder="OOTD memo"
        value={ootd.content}
        onChange={inputChangeHandler}
      />
      <input
        type="file"
        accept="image/*"
        id="myootd_image"
        multiple="multiple"
      />

      <button
        onClick={btnClickHandler}
        disabled={ootd.content.length < 2}
        className={ootd.id ? "update" : ""}
      >
        {ootd.id ? "변경" : "추가"}
      </button>
    </div>
  );
};

export default OotdInput;
