import React, {useEffect, useState} from "react";
import {Image} from "cloudinary-react";

export default function Home() {
  const [imageIds, setImageIds] = useState();

  const loadImages = async () => {
      const res = await fetch("http://127.0.0.1:8000/api/images");
      const data = await res.json();
      setImageIds(data);
  };

  useEffect(() => {
    loadImages();
  }, []);
  
  return (
    <div className="gallery">
      {imageIds &&
        imageIds.map((imageId, index) => (
          <Image
            key={index}
            cloudName={"caits-closet"}
            publicId={imageId}
            width="300"
            crop="scale"
          />
        ))}
    </div>
  );
}
