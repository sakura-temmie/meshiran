export default function MainContaints (props)  {
  const { inputRef, textOcr, fileUpload, onChange, handleClick, onChangeText } =
  props;

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("thumbnail").setAttribute("src", e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="contents">
      <image id="thumbnail" accept="image/*"  alt="" />
      <br />
      <div className="buttonArea">
        {/* <button className="btn-gradient" onClick={fileUpload}>
          File Upload
        </button> */}
        <input
          // hidden
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleChange}
        />
        <div className="migi">
          <image  alt="" />
        </div>
        <button className="button" onClick={handleClick}>
          Try OCR
        </button>
      </div>
      <br />
      <div className="textAre">
        <textarea value={textOcr} onChange={onChangeText} />
      </div>
      <br />
      <a id="searchButton" href={"https://www.google.com/search?q=" + textOcr}>
        Google検索
      </a>
    </div>
  );
};
