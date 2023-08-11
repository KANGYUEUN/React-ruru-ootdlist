import { useState } from "react";

const OotdInput = (props) => {
  const { ootd, setOotd, ootdInput } = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setOotd({ ...ootd, content: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setSelectedFile(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const btnClickHandler = (e) => {
    ootdInput(ootd.content, selectedFile);
    setSelectedFile(null);
    setPreviewImage(null);
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
        onChange={handleFileChange}
      />
      {previewImage && (
        <div>
          <h3>Image Preview:</h3>
          <img
            src={previewImage}
            alt="Preview"
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />
        </div>
      )}

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
