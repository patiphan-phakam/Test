import React, { useState } from "react";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { IProductDataImage } from "../../../types/product";

interface Props {
  images: IProductDataImage[];
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
                className={`icon-action ${indexImage === 0 ? "disabled" : ""}`}
                onClick={() => onPrev()}
              >
                <LeftOutlined />
              </div>
              <img
                src={images[indexImage].productImageSource}
                alt={`product-${images[indexImage].id}`}
              />
              <div
                className={`icon-action ${
                  indexImage === images.length - 1 ? "disabled" : ""
                }`}
                onClick={() => onNext()}
              >
                <RightOutlined />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
