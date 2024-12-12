import './imagePreview.scss';
import { FC, useState } from 'react';
import OptionImagePreview from '../OptionImagePreview';

interface IImagePreviewProps {
  imageURL: string;
}

const ImagePreview: FC<IImagePreviewProps> = ({ imageURL }) => {
  // const [showImagePreview, setShowImagePreview] = useState<string>(
  //   optionsImagePreview[0].imageUrl,
  // );
  // const [optionPreviewActive, setOptionPreviewActive] = useState<string>(
  //   optionsImagePreview[0].id,
  // );

  // const handleSelectOption: (imageUrl: string, id: string) => void = (
  //   imageUrl,
  //   id,
  // ) => {
  //   setShowImagePreview(imageUrl);
  //   setOptionPreviewActive(id);
  // };
  return (
    <div className="image__preview-component">
      <div className="main__image">
        <img src={imageURL} alt="" />
      </div>
      {/* <div className="options__preview">
        {optionsImagePreview.map((option, index) => (
          <OptionImagePreview
            key={`${index}`}
            imagePreviewUrl={option.imageUrl}
            label={option.label}
            handleSelect={handleSelectOption}
            id={option.id}
            isActive={optionPreviewActive === option.id}
          />
        ))}
      </div> */}
    </div>
  );
};

export default ImagePreview;
