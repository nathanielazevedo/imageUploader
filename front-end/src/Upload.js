import "./App.css";
import axios from "axios";

function Upload() {
  const handleUpload = (evt) => {
    evt.preventDefault();

    const reader = new FileReader();
    reader.readAsDataURL(evt.target.files[0]);
    reader.onloadend = () => {
      uploadImageToServer(reader.result);
    };
  };

  const uploadImageToServer = async (imageCode) => {
    await axios.post(
      "http://127.0.0.1:8000/photos/upload",
      JSON.stringify({data: imageCode}),
      {headers: {"Content-Type": "application/json"}}
    );
    alert("photo has been uploaded");
  };

  return (
    <div className="input-container">
      <input type="file" onChange={handleUpload} />
    </div>
  );
}

export default Upload;
