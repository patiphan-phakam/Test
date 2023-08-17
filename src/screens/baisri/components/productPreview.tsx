import React, { useState } from "react";
import { IImage } from "../../../components/CardCarouselProduct";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";

interface Props {
  images: IImage[];
}

export const ProductPreview: React.FC<Props> = ({ images }) => {
  const [indexImage, setIndexImage] = useState<number>(0);
  const onPrev = () => {
    setIndexImage(Math.max(indexImage - 1, 0));
  };

  const onNext = () => {
    setIndexImage(Math.min(indexImage + 1, images.length - 1));
  };

  return (
    <>
      <div className="parent">
        {images[indexImage] && (
          <>
            <div className="child fade-in">
              <div
                className={`icon-prev ${indexImage === 0 ? "disabled" : ""}`}
                onClick={() => onPrev()}
              >
                <LeftCircleOutlined />
              </div>
              <img
                src={images[indexImage].image}
                alt={`product-${images[indexImage].id}`}
              />
              <div
                className={`icon-next ${
                  indexImage === images.length - 1 ? "disabled" : ""
                }`}
                onClick={() => onNext()}
              >
                <RightCircleOutlined />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
